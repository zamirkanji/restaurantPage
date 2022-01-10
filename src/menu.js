import { Element, createPage } from "./app.js";

//using createPage factory Function 
const createMenuPage = () => {
    const menu = createPage();
    console.log('called menu page');
    return () => {
        let m = menu.createMainDiv('menu-page');
        let t = menu.createAboutTitle(m);
        let d = menu.createAboutDescription(m);
        let d2 = menu.createAboutDescription(m);
        menu.addClass(d, 'backgroundImg');
        menu.addClass(d2, 'd2-container');
        let para = about.createElement('p', 'title-text', 'title-container');
        let para2 = about.createElement('p', 'rest-name', 'descrip-container');
        let para3 = about.createElement('p', 'd2-text', 'd2-container')
        menu.addText(para, 'Menu');
        menu.addText(para3, 'Lorem ipsum dolor sit amet');
        
    }
}

export {
    createMenuPage
}