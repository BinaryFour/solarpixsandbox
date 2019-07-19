/*
CategoryEdit - Individual Category look

Purpose:
User able to take photos and edit existing photos for this category.

Photo file title syntax "projectName_title_imgQty_user"

*/

import React from 'react';
import { connect } from 'react-redux';
import { getCategory, addPhoto, updatePhotoQty, updateCatUploadStatus } from '../../actions';
import { withToastManager } from 'react-toast-notifications';

import db from '../../database/db';
import CameraComp from '../CameraComp';
import Footer from '../Footer';
import Modal from '../Modal';

import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import uploadImage from '../../apis/uploadImage';
//import detectConnection from '../detectConnection';

//USED to be used for footer lol
/*
const links = [
  { path: `/categories`, id:'categoryList', label: 'Back' }
];
*/
/*
Color Hex Codes:

Red: DB2828
Yellow: FBBD08
Blue: 2185D0
Orange: F2711C
Green: 21BA45
*/

class CategoryEdit extends React.Component {

  //Apparently this is bad practice, but I can't think of an alt right now.  Variable checks for component life cycle state.  Used for preventing setState when unmounted
  _isMounted = false;
  testVar = false;

  state = {
    categoryId: this.props.match.params.id,
    image: {},
    showImage: '',
    imageTitle: '',
    imageId:'',
    imageQty: '',
    thumbnails: [],
    showModal: 'none',
    showPermissionsMsg: false
  };

  //Fetch the category data from store
  //Get the photoQty and existing thumbnails
  //TODO:  If you delete the db, getThumbnails throws an error.  Check for that.
  componentDidMount = async () =>{
    //Set _isMounted var to true for potential unmount
    this._isMounted = true;

    //If the database isn't open, open it and get thumbnails
    if(!db.isOpen()){
      await db.open();
    }
    this.getThumbnails();

    //If Camera permission is denied, tell user to enable camera permissions
  }

  //if the component unmounts, cancel any setState calls
  //Update state w/ uploadStatus: unsent:fail, sentAll:success, default:neutral
  componentWillUnmount() {
    this._isMounted = false;
    this.countLocalPhotos();
  }

/*
Camera Methods
*/
  onCameraError(error) {
    console.log('This is the camera Error: ',error);
    this.setState({ showPermissionsMsg: true });
  }

//https://stackoverflow.com/questions/6850276/how-to-convert-dataurl-to-file-object-in-javascript
  //load src and convert to a File instance object
  //work for any type of src, not only image src.
  //return a promise that resolves with a File instance

  srcToFile = async (src) => {
    console.log('entered srcToFile');
    try{
      const res = await fetch(src);
      console.log('this is res: ', res);
      return res.arrayBuffer();
    }
    catch (e){
      console.log(e);
    }
  }

/*
Edit Methods
*/

  //Counts the amount of not-Uploaded photos in this category.  Sets store value
  countLocalPhotos = async () => {
    //console.log('Entered countLocalPhotos');
    const photoQty = this.props.category.photoQty;

    //If there are no photos, do nothing
    if (photoQty !== 0){
      let status = 'neutral';
      try{
        //This query grabs all photos in this category whose uploadStatus is 'notUploaded'
        const localCatPhotosCount = await db.table(this.props.currentJob)
          .where('uploadStatus').equals('notUploaded')
          .and((result) => {
            //console.log('result ',result);
            const tempArray = result.photoId.split('_');
            return tempArray[0] === `${this.state.categoryId}`;
          })
          .count();
        //console.log('This is localCatPhotosCount: ', localCatPhotosCount);

        //If there are no photos, all photos are uploaded, otherwise, there are still local photos
        if(localCatPhotosCount === 0){
          //console.log('Query found no photos: Success');
          status = 'success';
        }
        else{
          //console.log('Query found photos: Fail');
          status = 'fail';
        }
        //update status
        this.props.updateCatUploadStatus(this.state.categoryId, status, this.props.job.pictureReqs);
      }
      catch (e) {
        console.log('Query failed: ',e);

      }
    }
    //console.log('localCatPhotosCount', localCatPhotosCount);
  }

  //When user clicks on existing photo, open modal
  //TODO: modal options (re-take or delete)
  onClickThumbnail = async (image) => {
    //if(!image.uploadStatus){
      const showImage = URL.createObjectURL(image.photo);
      await this.setState({ showModal: '', image: image.photo, showImage: showImage, imageId: image.photoId });
  }

  //Upload individual file from thumbnails.  Relies on state.image/state.imageId
  uploadFile = async () => {
    const imageId = this.state.imageId;
    const image = this.state.image;
    await this.setState({
              showModal: 'none',
              image: {},
              showImage: '',
              imageId: ''
            })
    this.toastSettings(`Uploading File...`, 'info');
    try{
      await uploadImage(image);
      this.toastSettings('Uploaded Image!','success');
      this.updateStatusTrue(imageId);

      if(this._isMounted){
        this.getThumbnails();
      }
    }
    catch (e){
      console.log(e);
      this.toastSettings('Image upload fail.  You can click on an thumbnail to re-attempt upload','error');
      //Upload failed, keep uploadStatus as 'False' and add image to offline image queue
    }
  }

  //callback to Camera to get Added photo file.  Create photo file name
  onAddPhoto = async (dataUri) => {
    const arrBuffer = await this.srcToFile(dataUri);

    console.log('this is arrBuffer: ', arrBuffer);
    const job = this.props.job;
    const userName = this.props.userName;
    const timeStamp = Math.floor(Date.now() / 1000);

    const imageQty = this.state.imageQty + 1;
    const imageTitle = `${job.projectName}-${job.profileName}_${this.props.category.title}-${imageQty}_${userName}`;
    const imageId = `${this.state.categoryId}_${timeStamp}`;
    //Set current imageId to lastmodified date and rename file
    const renamedFile = new File([arrBuffer], imageTitle+'.jpeg', {type: 'image/jpeg'} );
    console.log('This is imageTitle: ',imageTitle,'This is renamedFile: ',renamedFile);
    await this.setState({ imageTitle: imageTitle, imageId: imageId });
    //Save file to db, upload photo to server, refresh current page w/ thumbnails
    try{
      //If saveToDb fails, notify user w/ error code.
      this.saveToDb(renamedFile);
      this.getThumbnails();
    }catch(error){
      this.toastSettings(`Screenshot this and send to your dev ${error}`, 'error');
    }
    this.toastSettings(`Uploading File...`, 'info');

    try{
      //Upload succeeded, set uploadStatus to 'True' in indexdb and queue file for deletion
      await uploadImage(renamedFile);
      this.toastSettings('Uploaded Image!','success');
      this.updateStatusTrue(imageId);
      //This causes issues if component unmounts.  Illegal setState
      if(this._isMounted){
        this.getThumbnails();
      }
    }
    catch (e){
      console.log(e);
      this.toastSettings('Image upload fail.  You can click on an thumbnail to re-attempt upload','error');
      //Upload failed, keep uploadStatus as 'False' and add image to offline image queue
    }
  }



  //Saves image to db
  saveToDb = async (img) => {
    await db.table(this.props.currentJob).add({ photoId: `${this.state.imageId}`, fileName: this.state.imageTitle, uploadStatus: 'notUploaded', photo: img, job:this.props.currentJob, pictureReq: this.props.job.pictureReqs });
    //TODO: do we need to refresh db?  Or is this just a chrome not updating thing 'data may be stale'
  }

  updateStatusTrue = async (imageId) => {
    //console.log('UpdateStatusTrue, state w/ imageId', this.state);
    await db.table(this.props.currentJob).update(imageId, { uploadStatus: 'uploaded' });
  }

  //Access db and return count: number of photos in category
  //put thumbnails in state thumbnails and display
  getThumbnails = async () => {
    let thumbnails = [];
    let photoQty = 0;
    const categoryId = this.state.categoryId;
    try{
      thumbnails = await db.table(this.props.currentJob).where('photoId').startsWith(`${categoryId}_`).toArray();
      photoQty = thumbnails.length;
      //console.log('no error');
    }
    catch (e){
      console.log('No Photos', e);
    }
    //Update store w/ photoQty value and rerender
    this.props.updatePhotoQty(categoryId, photoQty, this.props.job.pictureReqs);
    this.setState({ imageQty: photoQty, thumbnails: thumbnails });
    //console.log(this.state.thumbnails);
  }

  //Helper method:  simplify toast messages
  toastSettings = (message, status) => {
    this.props.toastManager.add(message, {
      appearance: status,
      autoDismiss: true,
    });
  }



  //render options for Modal
  renderActions(){
    return(
      <React.Fragment>
        <button onClick={() => this.uploadFile()} className="ui button primary">Upload</button>
        <button onClick={() => this.setState({
          showModal: 'none',
          image: {},
          showImage: '',
          imageId: ''
        })} className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  //render list of photos
  renderList() {
    return this.state.thumbnails.map( image => {
      if(image){
        const imageURL = URL.createObjectURL(image.photo);
        return(
          <div onClick={(e) => this.onClickThumbnail(image)} className="item" key={image.photoId}>
            <img className="ui small rounded centered image" src={imageURL} alt="" style={{ marginBottom: '5px' }}/>
              <div className="description" >{image.uploadStatus === 'uploaded' ? 'Uploaded!' : 'Not Uploaded'}</div>
          </div>
        );
      };
      return <div></div>;
    });
  }

  render(){
    return(
      <div>
        <Modal
          show={this.state.showModal}
          title={this.state.image.name}
          image={this.state.showImage}
          actions={this.renderActions()}
          onDismiss={() => this.setState({ showModal: 'none' })}
        />
        <h2>{this.props.category.title}</h2>
        <h3>{this.props.category.description}</h3>
        <h4 style={this.state.showPermissionsMsg ? {} : {display: 'none'}}>You must allow access to the Camera.  If you denied the permission, please go to your chrome settings and enable the Camera permission for this site</h4>
        <div>
          <Camera
            onTakePhoto = { (dataUri) => { this.onAddPhoto(dataUri); } }
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            imageType = {IMAGE_TYPES.JPG}
            isImageMirror = {false}
            onCameraError = { (error) => { this.onCameraError(error); } }
          />
          <CameraComp onSubmit = {this.onAddPhoto} />
          <h3>Photos: {this.state.imageQty}</h3>
          <div className="ui huge horizontal selection celled list" style={{ marginBottom: '60px'}}>
            {this.renderList()}
          </div>
        </div>
        <Footer links={[
          { path: `/${this.props.currentJob}/categories`, id:'categoryList', label: 'Back' }
        ]} />
      </div>
    );
  }
}

//Put category data into category props
const mapStateToProps = (state, ownProps) => {

  const currentJobId = state.jobMeta.currentJob;
  const currentPictureReqs = state.sessions.entities.jobs[currentJobId].pictureReqs;
  //console.log(state.sessions.entities.pictureReqs[currentPictureReqs].categories);
  //console.log(ownProps.match.params.id);

  return{
    category: state.sessions.entities.pictureReqs[currentPictureReqs].categories[ownProps.match.params.id],
    job: state.sessions.entities.jobs[currentJobId],
    userName: state.userData,
    currentJob: currentJobId
  };
}

//Enable toast for this component
const toastManager = withToastManager(CategoryEdit);

export default connect(mapStateToProps, { getCategory, addPhoto, updatePhotoQty, updateCatUploadStatus })(toastManager);
