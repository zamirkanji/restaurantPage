import { Element } from "./app";
import { createAboutPage } from "./about";
import { createMenuPage } from "./menu";

const mainDiv = document.querySelector('#content');

const createHeader = () => {

    const mainHeader = new Element('div', 'main-header').create('header-nav-logo');
    const btnWrapper = new Element('div', 'tab-wrapper').create();
    const btnAbout = new Element('button', 'tab').create('btn-about');
    const btnMenu = new Element('button', 'tab').create('btn-menu');
    const btnContact = new Element('button', 'tab').create('btn-contact');

    const anchorAbout = new Element('a', 'anchorAbout').create();

    const anchorMenu = new Element('a', 'anchorMenu').create();
 
    
    btnAbout.textContent = 'About';
    btnMenu.textContent = 'Menu';
    btnContact.textContent = 'Contact';

    btnAbout.type = 'button';

    
    // anchorAbout.href = '#';
    // anchorAbout.onclick = 'createAboutPage(); return false';

    // anchorMenu.href = '#';
    // anchorMenu.onclick = 'createMenuPage(); return false';


    const menuOpen = new Element('button', 'menuOpen').create();
    const menuIconContainer = new Element('span', 'menuIconContainer').create();

    const logoDiv = new Element('div', 'logo-div').create();
    const logoText = new Element('p', 'logo-txt').create();
    logoText.textContent = 'Zammy\'s';
    
    mainDiv.appendChild(mainHeader);
    mainHeader.append(btnWrapper);

    // btnWrapper.append(anchorAbout);
    //anchor elements appended to each button 
    // anchorAbout.append(btnAbout);
    // anchorMenu.append(btnMenu);

    btnWrapper.append(btnAbout);
    btnWrapper.append(btnMenu);
    btnWrapper.append(btnContact);
    mainHeader.append(logoDiv);
    logoDiv.append(logoText);
    mainHeader.append(menuOpen);
    menuOpen.append(menuIconContainer);
}

const createFooter = () => {
    const mainFooter = new Element('div', 'main-footer').create();
    const para = new Element('p', 'footer-text').create();
    mainDiv.appendChild(mainFooter);
    mainFooter.append(para);
}

export {
    createHeader,
    createFooter
}