import { Element, createPage } from "./app.js";

//using createPage factory Function 
const createMenuPage = () => {
    const menu = createPage();

    return () => {
        let m = menu.createMainDivDiv();
        let t = menu.createAboutTitle(m);
        let d = menu.createAboutDescription(m);
        let title = menu.createElement('p', 'title-text', '')
        
    }
}

export {
    createMenuPage
}