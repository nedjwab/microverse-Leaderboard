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

// add eventlistner to the buttons
form.addEventListener('submit', formData);
Refresh.addEventListener('click', getData);
