

import {
    postData
      } from './GetPostData.js';
      
      
    
//get the data from the form
export const formData =(e)=> {
    e.preventDefault();
      var name =  document.querySelector('.name').value;
      var score= document.querySelector('.score').value;
      console.log(name);

const obj = {
    'name':name,
    'score':score
}
postData(obj);
}