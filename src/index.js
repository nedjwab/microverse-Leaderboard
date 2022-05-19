// import _ from 'lodash';
import './style.css';

import {
  form, Refresh,submit
} from './modules/elements.js';

import {
  formData,
} from './modules/formData.js';

import {
  getData,
} from './modules/GetPostData.js';

// add eventlistner to the buttons
form.addEventListener('submit', formData);
Refresh.addEventListener('click', getData);
submit.addEventListener('click',()=>{
  form.reset();
})

window.onload = () => {
  getData();
};