import {pageLoad, Element}from './app.js';
import createPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

const mainDiv = document.querySelector('#content');
//loading about page on defualt
const headerFooter = (() => {

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
})();

headerFooter.createHeader();
headerFooter.createFooter();
 
const callAboutPage = () => {
    const about = createPage();
    console.log(about);
    return () => {
        let m = about.createMainDiv();
        let t = about.createAboutTitle(m);
        let d = about.createAboutDescription(m);
        about.addText(t, 'Test', 'test-class');
    }
}

const callMenuPage = () => {
    const menu = menuPage();

    return () => {
        
    }

}
const callContactPage = () => {
    const contact = contactPage();
}

pageLoad(callAboutPage());





//main container (#content)
const allBtns = document.getElementsByClassName('tab');
console.log(allBtns);
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