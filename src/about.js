import { Element } from "./app.js";

const createPage = () => {
    const mainDiv = document.querySelector('#content');

    const createMainDiv = () => {
        const mainContainer = new Element('div', 'main-container').create();
        mainDiv.appendChild(mainContainer);
        return mainContainer;
    }
    const createAboutDescription = (f) => {
        const descriptionContainer = new Element('div', 'descrip-container').create();
        f.appendChild(descriptionContainer);
            // const addText = (t) => {
            //     return descriptionContainer.textContent = t;
            // }
        return descriptionContainer;
    }
    const createAboutTitle = (f) => {
        const titleContainer = new Element('div', 'title-container').create();
        f.appendChild(titleContainer);
        return titleContainer;
    }

    const addText = (f,t,c) => {
        f.classList.add(c);
        return f.textContent = t;
    }

    const addClass = (f, c) => {
        return f.classList.add(c);
    }

    const createElement = (t, f, p) => {
        const el = new Element(t, f).create();
        const parent = document.querySelector(`.${p}`);
        console.log(el, parent);
        parent.appendChild(el);
        return el;
    }

    return {
        createMainDiv,
        createAboutDescription,
        createAboutTitle,
        addText,
        addClass,
        createElement
    }
}

export default createPage;