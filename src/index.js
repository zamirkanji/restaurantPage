import {pageLoad, Element, createPage} from './app.js';
import {createAboutPage} from './about.js';
import {createMenuPage} from './menu.js';
import {createContactPage} from './contact.js';
import { createFooter, createHeader } from './navFooter.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';
import menuIcon from './img/menu.png';

const mainDiv = document.querySelector('#content');

//create header and footer div on main page (Stays for all tabs)
createHeader();
pageLoad(createAboutPage());
// createFooter();

const changeHeaderOnScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.main-header').style.opacity = '.5';
    } else {
        document.querySelector('.main-header').style.opacity = '1';
    }
}

window.onscroll = () => {
    changeHeaderOnScroll();
}

//call about page 
const callAboutPage = () => createAboutPage();

//call menu page
const callMenuPage = () => createMenuPage();

//call contact page
const callContactPage = () => createContactPage();







const checkWhichBtn = (btn) => {
    if (btn.textContent === 'About') {
        return callAboutPage();
    }
    if (btn.textContent === 'Menu') {
        return callMenuPage();
    }
    if (btn.textContent === 'Contact') {
        return 'Contact';
    }
}

//main container (#content)
const allBtns = document.querySelectorAll('.tab');
console.log(allBtns);
allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        checkWhichBtn(btn);
    })
})
for (let i = 0; i < allBtns.length; i++) {
    console.log(allBtns[i]);

}

// const addImg = () => {
    // const imgWrapper = document.createElement('div');
    // imgWrapper.classList.add('backgroundImg');

    // const myImg = new Image();
    // myImg.src = exterior;

    // imgWrapper.appendChild(myImg);
    // mainDiv.appendChild(imgWrapper);

    // document.body.appendChild(mainDiv);
// }