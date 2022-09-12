import _ from 'lodash';
import './style.css';
import gif from "./1.gif";
import Notes from './data.csv';
import printMe from './print.js';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

     const btn = document.createElement('button');


  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

     // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = gif;

  element.appendChild(myIcon);

  console.log(Notes);

   return element;
 }

 document.body.appendChild(component());