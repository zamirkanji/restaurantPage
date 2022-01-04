import {pageLoad, Element}from './app.js';
import aboutPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

const mainDiv = document.querySelector('#content');
//loading about page on defualt
const header = (() => {

    const mainHeader = new Element('div', 'main-header').create();
    const btnAbout = new Element('button', 'tab').create();
    const btnMenu = new Element('button', 'tab').create();
    const btnContact = new Element('button', 'tab').create();
    

    btnAbout.textContent = 'About';
    btnMenu.textContent = 'Menu';
    btnContact.textContent = 'Contact';

    // btnAbout.text(btnAbout, 'About');
    // btnAbout.testLog('hello');
    
    mainDiv.appendChild(mainHeader);
    mainHeader.append(btnAbout);
    mainHeader.append(btnMenu);
    mainHeader.append(btnContact);

    
})();

pageLoad(aboutPage());

const footer = (() => {
    const mainFooter = new Element('div', 'main-footer').create();
    
    mainDiv.appendChild(mainFooter);
})();

//main container (#content)
const allBtns = document.getElementsByClassName('tab');
console.log(allBtns);




// const imgWrapper = document.createElement('div');
// imgWrapper.classList.add('backgroundImg');

// const myImg = new Image();
// myImg.src = exterior;

// imgWrapper.appendChild(myImg);
// mainDiv.appendChild(imgWrapper);

// document.body.appendChild(mainDiv);
