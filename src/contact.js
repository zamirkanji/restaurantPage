import { Element, createPage } from "./app.js";

//using createPage factory Function 
const createContactPage = () => {
    const contact = createPage('contact page');
    
    let m = contact.createMainDiv('contact-page');
    let t = contact.createAboutTitle(m);
    let d = contact.createBodyDiv(m);
    let d2 = contact.createBodyDiv(m);
    // contact.addClass(d, 'backgroundImg');
    contact.addClass(d2, 'd2-container');
    let para = contact.createElement('p', 'title-text', 'title-container');
    let para2 = contact.createElement('p', 'rest-name', 'descrip-container');
    let para3 = contact.createElement('p', 'd2-text', 'd2-container')
    contact.addText(para, 'contact');
    contact.addText(para3, 'Lorem ipsum dolor sit amet');
}

export {
    createContactPage
}