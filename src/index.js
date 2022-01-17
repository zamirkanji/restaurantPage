import {pageLoad, Element, createPage} from './app.js';
import {createAboutPage} from './about.js';
import {createMenuPage} from './menu.js';
import {createContactPage} from './contact.js';
import { createFooter, createHeader } from './navFooter.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';
import menuIcon from './img/menu.png';

const CONTENT = document.querySelector('#content');



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
const callAboutPage = () => {
    const about = document.querySelector('.btn-about');
    about.classList.add('active');
    return createAboutPage();
    // return false;
}

//call menu page
const callMenuPage = () => createMenuPage();

//call contact page
const callContactPage = () => createContactPage();


//create header and footer div on main page (Stays for all tabs)
createHeader();
pageLoad(callAboutPage());
createFooter();

//add active class, removes active btn already has
const addActiveClass = (() => {
    const btns = document.querySelector('.tab-wrapper');
    const allBtns = btns.getElementsByClassName('tab');
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].addEventListener('click', (e) => {
            const target = e.target;
            const current = btns.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace('active', '');
            }
            return target.classList.add('active');
        })
    }
})();

const changePages = (() => {
    const btns = document.querySelectorAll('.tab');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const page = document.querySelector('.main-container');
            page.parentNode.removeChild(page);

            if (btn.textContent === 'Menu') {
                console.log(btn);
                callMenuPage();
            };
            if (btn.textContent === 'Contact') {
                console.log(btn);
                callContactPage();
            };
            if (btn.textContent === 'About') {
                console.log(btn);
                callAboutPage();
            };
        })
        return false;
    })
})();

