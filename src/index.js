import {pageLoad, Element, createPage} from './app.js';
import {createAboutPage} from './about.js';
import {createMenuPage} from './menu.js';
import {createContactPage} from './contact.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

const mainDiv = document.querySelector('#content');

//create header and footer div on main page (Stays for all tabs)
const headerFooter = () => {

    const createHeader = () => {
        const mainHeader = new Element('div', 'main-header').create();
        const btnAbout = new Element('button', 'tab').create();
        const btnMenu = new Element('button', 'tab').create();
        const btnContact = new Element('button', 'tab').create();
        
        btnAbout.textContent = 'About';
        btnMenu.textContent = 'Menu';
        btnContact.textContent = 'Contact';

        
        mainDiv.appendChild(mainHeader);
        mainHeader.append(btnAbout);
        mainHeader.append(btnMenu);
        mainHeader.append(btnContact);
    }
    
    const createFooter = () => {
        const mainFooter = new Element('div', 'main-footer').create();
        const para = new Element('p', 'footer-text').create();
        mainDiv.appendChild(mainFooter);
        mainFooter.append(para);
    }

    // return mainHeader;
    return {
        createHeader,
        createFooter
    }
};

const headFoot = headerFooter();

headFoot.createHeader();

//call about page 
const callAboutPage = () => createAboutPage();


const callMenuPage = () => createMenuPage();

const callContactPage = () => createContactPage();

pageLoad(callAboutPage());
// headFoot.createFooter();



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