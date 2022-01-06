import { Element, createPage } from "./app.js";

//using createPage factory function from app.js
const createAboutPage = () => {
    const about = createPage();
    console.log(about);
    return () => {
        let m = about.createMainDiv();
        let t = about.createAboutTitle(m);
        let d = about.createAboutDescription(m);
        let d2 = about.createAboutDescription(m);
        about.addClass(d, 'backgroundImg');
        about.addClass(d2, 'd2-container');
        let para = about.createElement('p', 'title-text', 'title-container');
        let para2 = about.createElement('p', 'd2-text', 'd2-container')
        about.addText(para, 'About Us');
        about.addText(para2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit turpis cursus. Et netus et malesuada fames ac turpis egestas integer eget. Libero volutpat sed cras ornare arcu dui. Nullam non nisi est sit amet facilisis magna etiam tempor. Nibh tellus molestie nunc non. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum leo vel orci porta non. Pharetra sit amet aliquam id diam maecenas. Accumsan in nisl nisi scelerisque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.');
    }
}

export {
    createAboutPage
};