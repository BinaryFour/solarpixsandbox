import axios from 'axios';

//TODO change baseURL to actual URL when app is hosted
export default axios.create({
  baseURL: 'https://binaryfour.github.io/'
})
