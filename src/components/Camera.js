/*
Camera - Renders a 'Take Photo' button that prompts user Camera

Purpose:
Get photo from user camera.  Hand off photo file through callback

*/

import React from 'react';

const styles = {
  display: 'none'
};

class Camera extends React.Component {

  //Callback function.  Returns taken photo
  handleImage = (event) => {
    this.props.onSubmit(event.target.files[0]);
  }

  //Render input tag 'Take Photo' to allow user to take photo with their camera
  render (){
    return(
      <div className="ui labeled big input">
        <input className="inputfile" id="file" onChange={this.handleImage} type="file" accept="image/*;capture=camera" style={styles}/>
        <label className="ui button large primary" htmlFor="file">Take Photo</label>
      </div>
    );
  }
}

export default Camera;
