import { createAboutPage } from "./about";
import { createHeader, createFooter } from "./navFooter";

const pageLoad = (f) => {
    return document.addEventListener('DOMContentLoaded', f, false);
}

class Element {
    constructor(type, classList) {   
        this.type = type;
        this.classList = classList;
        this.create = (c) => {
            const n = document.createElement(`${this.type}`);
            n.classList.add(`${this.classList}`);
            n.classList.add(`${c}`);
            return n;
        };
        this.testLog = (y) => {
            console.log(y);
        }
        this.addClass = (e, c) => {
            return e.classList.add(c);
        }
    }
    text(t, f) {
        t.textContent = f;
    }
    append(t) {
        this.appendChild(t);
    }
    addClass(b, c) {
        return this.classList.add(c);
    }
}

const createPage = () => {
    const mainDiv = document.querySelector('#content');

    const createMainDiv = (c) => {
        const mainContainer = new Element('div', 'main-container').create(c);
        mainDiv.appendChild(mainContainer);
        return mainContainer;
    }
    const createAboutDescription = (a) => {
        const descriptionContainer = new Element('div', 'descrip-container').create();
        a.appendChild(descriptionContainer);
        return descriptionContainer;
    }
    const createAboutTitle = (a) => {
        const titleContainer = new Element('div', 'title-container').create();
        a.appendChild(titleContainer);
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

// export default pageLoad;
export {
    pageLoad, 
    Element,
    createPage
}