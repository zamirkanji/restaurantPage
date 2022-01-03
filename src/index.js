import pageLoad from './app.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

// pageLoad();


const mainDiv = document.querySelector('#content');
const imgWrapper = document.createElement('div');
imgWrapper.classList.add('backgroundImg');

// const myImg = new Image();
// myImg.src = exterior;

// imgWrapper.appendChild(myImg);
mainDiv.appendChild(imgWrapper);

document.body.appendChild(mainDiv);

console.log('test');