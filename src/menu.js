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
        let itemTitle1 = menu.createElement('p', 'menu-title-1', 'menu-item-1');
        menu.addText(itemTitle1, 'Lobster Bisque');
        const para1 = menu.createElement('p', 'menu-text-1', 'menu-item-1');
        menu.addText(para1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        
        menu.addClass(menuItem2, 'menu-item-2');
        let itemTitle2 = menu.createElement('p', 'menu-title-2', 'menu-item-2');
        menu.addText(itemTitle2, 'Chicken');
        const para2 = menu.createElement('p', 'menu-text-2', 'menu-item-2');
        menu.addText(para2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

        menu.addClass(menuItem3, 'menu-item-3');
        let itemTitle3 = menu.createElement('p', 'menu-title-3', 'menu-item-3');
        menu.addText(itemTitle3, 'Wagyu Beef');
        const para3 = menu.createElement('p', 'menu-text-3', 'menu-item-3');
        menu.addText(para3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        
    // }
}

export {
    createMenuPage
}