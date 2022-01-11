import { Element, createPage } from "./app.js";

//using createPage factory Function 
const createMenuPage = () => {
    const menu = createPage('menu page');
    console.log('called menu page');
    console.log(menu);
    // return () => {
        let m = menu.createMainDiv('menu-page');
        let t = menu.createAboutTitle(m);
        let d = menu.createBodyDiv(m);
        let d2 = menu.createBodyDiv(m);
        // menu.addClass(d, 'backgroundImg');
        menu.addClass(d2, 'd2-container');
        let para = menu.createElement('p', 'title-text', 'title-container');
        let para2 = menu.createElement('p', 'rest-name', 'descrip-container');
        let para3 = menu.createElement('p', 'd2-text', 'd2-container')
        menu.addText(para, 'Menu');
        menu.addText(para3, 'Lorem ipsum dolor sit amet');
        
    // }
}

export {
    createMenuPage
}