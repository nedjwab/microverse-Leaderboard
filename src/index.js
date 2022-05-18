// import _ from 'lodash';
import './style.css';

import {
  form, Refresh,
} from './modules/elements.js';

import {
  formData,
} from './modules/formData.js';

import {
  getData,
} from './modules/GetPostData.js';

import
displayData
from './modules/displayData.js';

// add eventlistner to the buttons
form.addEventListener('submit', formData);
Refresh.addEventListener('click', getData);

window.onload=()=> {
    getData();
}