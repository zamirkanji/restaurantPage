const pageLoad = (f) => {
    return document.addEventListener('DOMContentLoaded', f, false);
}

class CreateElement {
    constructor(elName, type, classList) {
        this.elName = elName;
        this.type = type;
        this.classList = classList;
    }

    create() {
        const n = document.createElement(`${this.type}`)
    }
    addClass() {
        n.classList.add(`${this.classList}`);
    }
    append() {
        
    }
}

// export default pageLoad;
export {
    pageLoad, 
    CreateElement
}