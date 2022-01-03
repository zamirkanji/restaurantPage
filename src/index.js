import {pageLoad, CreateElement}from './app.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

//loading about page on defualt
pageLoad(aboutPage());

//main container (#content)
const mainDiv = document.querySelector('#content');

// const imgWrapper = document.createElement('div');
// imgWrapper.classList.add('backgroundImg');

// const myImg = new Image();
// myImg.src = exterior;

// imgWrapper.appendChild(myImg);
// mainDiv.appendChild(imgWrapper);

document.body.appendChild(mainDiv);
