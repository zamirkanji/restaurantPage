const pageLoad = (f) => {
    // const header = () => {
    //     const mainDiv = document.querySelector('#content');
    //     const mainHeader = new Element('div', 'main-header').create();
    //     mainDiv.appendChild(mainHeader);
    // };
    return document.addEventListener('DOMContentLoaded', f, false);
}

class Element {
    constructor(type, classList) {   
        this.type = type;
        this.classList = classList;
        this.create = () => {
            const n = document.createElement(`${this.type}`)
            n.classList.add(`${this.classList}`);
            return n;
        };
        this.testLog = (y) => {
            console.log(y);
        }
    }
    text(t, f) {
        t.textContent = f;
    }
    append(t) {
        this.appendChild(t);
    }
}

// export default pageLoad;
export {
    pageLoad, 
    Element
}