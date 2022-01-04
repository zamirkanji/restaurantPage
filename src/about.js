import { Element } from "./app.js";

const aboutPage = () => {
    const mainDiv = document.querySelector('#content');
    const aboutContainer = new Element('div', 'about-container').create();
    
    mainDiv.appendChild(aboutContainer);

    // mainDiv.appendChild(aboutContainer);
    // aboutContainer.append(bodyContainer);

}

export default aboutPage;