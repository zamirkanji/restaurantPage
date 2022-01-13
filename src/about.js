import { Element, createPage } from "./app.js";

//using createPage factory function from app.js
const createAboutPage = () => {

    const about = createPage('about page');
    // return () => {
        let m = about.createMainDiv('about-page');
        let t = about.createAboutTitle(m);
        let d = about.createBodyDiv(m);
        let d2 = about.createBodyDiv(m);
        about.addClass(d, 'backgroundImg');
        about.addClass(d2, 'd2-container');
        let para = about.createElement('p', 'title-text', 'title-container');
        // let para2 = about.createElement('p', 'rest-name', 'descrip-container');
        let para3 = about.createElement('p', 'd2-text', 'd2-container')
        about.addText(para, 'About Us');
        about.addText(para3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit turpis cursus. Et netus et malesuada fames ac turpis egestas integer eget. Libero volutpat sed cras ornare arcu dui. Nullam non nisi est sit amet facilisis magna etiam tempor. Nibh tellus molestie nunc non. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum leo vel orci porta non. Pharetra sit amet aliquam id diam maecenas. Accumsan in nisl nisi scelerisque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.');
        // return m;
    // }
}  

export {
    createAboutPage
};