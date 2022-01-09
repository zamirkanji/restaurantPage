import { Element } from "./app";

const mainDiv = document.querySelector('#content');

const createHeader = () => {
    const mainHeader = new Element('div', 'main-header').create();
    const btnWrapper = new Element('div', 'tab-wrapper').create();
    const btnAbout = new Element('button', 'tab').create();
    const btnMenu = new Element('button', 'tab').create();
    const btnContact = new Element('button', 'tab').create();
    
    btnAbout.textContent = 'About';
    btnMenu.textContent = 'Menu';
    btnContact.textContent = 'Contact';

    const navBar = document.querySelector('.tab');
    // navBar.classList.add('toggle-display');


    const menuOpen = new Element('button', 'menuOpen').create();
    const menuIconContainer = new Element('span', 'menuIconContainer').create();

    const logoDiv = new Element('div', 'logo-div').create();
    const logoText = new Element('p', 'logo-txt').create();
    logoText.textContent = 'Zammy\'s';
    
    mainDiv.appendChild(mainHeader);
    mainHeader.append(btnWrapper);
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