import {
  postData,
} from './GetPostData.js';

/* eslint-disable import/prefer-default-export */
// get the data from the form
export const formData = (e) => {
  e.preventDefault();
  let name = document.querySelector('.name').value;
  let score = document.querySelector('.score').value;
  const obj = {
    name,
    score,
  };
  postData(obj);
};