import { Element, createPage } from "./app.js";

//using createPage factory Function 
const createMenuPage = () => {
    const menu = createPage('menu page');
    // console.log('called menu page');
    // console.log(menu);
    // return () => {
        let mp = menu.createMainDiv('menu-page');
        let title = menu.createAboutTitle(mp);


        let menuItem = menu.createBodyDiv(mp);
        let menuItem2 = menu.createBodyDiv(mp);
        let menuItem3 = menu.createBodyDiv(mp);

        // menuItem.addClass
       

        let paraTitle = menu.createElement('p', 'title-text', 'title-container');
        menu.addText(paraTitle, 'Menu');

        menu.addClass(menuItem, 'menu-item-1');
        let para = menu.createElement('p', 'menu-text', 'menu-item-1');
        menu.addText(para, 'Lobster Soup');
        
        menu.addClass(menuItem2, 'menu-item-2');
        let para2 = menu.createElement('p', 'menu-text', 'menu-item-2');
        menu.addText(para2, 'Chicken');

        menu.addClass(menuItem3, 'menu-item-3');
        let para3 = menu.createElement('p', 'menu-text', 'menu-item-3');
        menu.addText(para3, 'Wagyu Beef');
        
    // }
}

export {
    createMenuPage
}