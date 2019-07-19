import files from '../apis/files';

//import axiosRetry from 'axios-retry';

const uploadImage = (image) => {

  //axios retry for exponential back-off
  //axiosRetry(files, { retryDelay: axiosRetry.exponentialDelay });


  //Set up necessary parameters for POST to EmPower server
  const authParam = { username: 'upload', password: 'nD2Qm9t4' };
  const url = 'http://upload.empower-solar.com/index2.php';

  //Set up necessary parameters for CORS proxy
  /*
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  await fetch(proxyurl + url)
  .then(response => response.text())
  .then(contents => console.log(contents))
  .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  */

  const config = {
    auth: authParam,
    crossDomain: true
  }

  const formData = new FormData();
  formData.append('upload',image);

  return files.post('https://cors-anywhere.herokuapp.com/' + url, formData, config);
  //return axiosRetry(files)


}

export default uploadImage;
