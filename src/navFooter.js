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


    const menuOpen = new Element('button', 'menuOpen').create();
    // menuOpen.addClass('test');
    const line1 = new Element('span', 'line1').create();
    // const line2 = new Element('span', 'line2').create();
    line1.textContent = '=';
    // line2.textContent = '__';
    
    mainDiv.appendChild(mainHeader);
    mainHeader.append(btnWrapper);
    btnWrapper.append(btnAbout);
    btnWrapper.append(btnMenu);
    btnWrapper.append(btnContact);
    mainHeader.append(menuOpen);
    menuOpen.append(line1);
    // menuOpen.append(line2);
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