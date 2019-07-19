/*
App

Sets up history and routing for components.

*/

import React from 'react';
import { connect } from 'react-redux';
import { uploadAllPhotos, updateUploadStatus } from '../actions';
//Import history.  May have to change this based on Host site
import { HashRouter, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import NetworkDetector from '../HOCs/NetworkDetector';
//import history from '../history';
//Import local components
import CreateJob from './pages/CreateJob';
import CategoryList from './pages/CategoryList';
import CategoryEdit from './pages/CategoryEdit';
import DeleteJob from './pages/DeleteJob';
import UploadAll from './pages/UploadAll';
import JobList from './pages/JobList';
import SignIn from './pages/SignIn';



const App = (props) => {

  if(!props.isDisconnected && props.uploadStatus !== 'uploading'){
    //console.log('You have no network connection', props);
    props.updateUploadStatus('uploading');
    props.uploadAllPhotos();
  }
  else if(props.isDisconnected && props.uploadStatus === 'uploading'){
    props.updateUploadStatus('');
  }

//console.log('ayylmao');

  return (
    <ToastProvider>
      <p>v{process.env.REACT_APP_VERSION}</p>
      <div className="ui container" >
        <HashRouter>
          <div>
            <Route path="/newjob" exact component={CreateJob}/>
            <Route path="/:job/categories" exact component={CategoryList}/>
            <Route path="/:job/categories/:id" exact component={CategoryEdit}/>
            <Route path="/delete" exact component={DeleteJob}/>
            <Route path="/upload" exact component={UploadAll}/>
            <Route path="/joblist" exact component={JobList}/>
            <Route path="/" exact component={SignIn}/>
          </div>
        </HashRouter>
      </div>
    </ToastProvider>
  );
}

const mapStateToProps = (state) => {
  return{
    uploadStatus: state.uploadStatus
  }
}

const networkDetector = NetworkDetector(App);

export default connect(mapStateToProps, { uploadAllPhotos, updateUploadStatus })(networkDetector);
//export default App;
