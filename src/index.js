import {pageLoad, Element} from './app.js';
import createPage from './about.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';
import exterior from './img/exterior.jpeg';
import exterior2 from './img/kevin1.jpeg';

const mainDiv = document.querySelector('#content');

//create header and footer div on main page (Stays for all tabs)
const headerFooter = () => {

    const createHeader = () => {
        const mainHeader = new Element('div', 'main-header').create();
        const btnAbout = new Element('button', 'tab').create();
        const btnMenu = new Element('button', 'tab').create();
        const btnContact = new Element('button', 'tab').create();
        
        btnAbout.textContent = 'About';
        btnMenu.textContent = 'Menu';
        btnContact.textContent = 'Contact';

        
        mainDiv.appendChild(mainHeader);
        mainHeader.append(btnAbout);
        mainHeader.append(btnMenu);
        mainHeader.append(btnContact);
    }
    
    const createFooter = () => {
        const mainFooter = new Element('div', 'main-footer').create();
        const para = new Element('p', 'footer-text').create();
        mainDiv.appendChild(mainFooter);
        mainFooter.append(para);
    }

    // return mainHeader;
    return {
        createHeader,
        createFooter
    }
};

const headFoot = headerFooter();

headFoot.createHeader();

 
const callAboutPage = () => {
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
        about.addText(para2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis blandit turpis cursus. Et netus et malesuada fames ac turpis egestas integer eget. Libero volutpat sed cras ornare arcu dui. Nullam non nisi est sit amet facilisis magna etiam tempor. Nibh tellus molestie nunc non. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum leo vel orci porta non. Pharetra sit amet aliquam id diam maecenas. Accumsan in nisl nisi scelerisque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Feugiat in ante metus dictum at. In pellentesque massa placerat duis ultricies lacus sed.');
    }
}

const callMenuPage = () => {
    const menu = menuPage();

    return () => {
        
    }

}
const callContactPage = () => {
    const contact = contactPage();
}

pageLoad(callAboutPage());

// headFoot.createFooter();

const checkWhichBtn = (btn) => {
    if (btn.textContent === 'About') {
        return 'About';
    }
    if (btn.textContent === 'Menu') {
        return 'Menu';
    }
    if (btn.textContent === 'Contact') {
        return 'Contact';
    }
}

//main container (#content)
const allBtns = document.querySelectorAll('.tab');
console.log(allBtns);
allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn);
        let returnBtn = checkWhichBtn(btn);
    })
})
for (let i = 0; i < allBtns.length; i++) {
    console.log(allBtns[i]);

}

// const addImg = () => {
    // const imgWrapper = document.createElement('div');
    // imgWrapper.classList.add('backgroundImg');

    // const myImg = new Image();
    // myImg.src = exterior;

    // imgWrapper.appendChild(myImg);
    // mainDiv.appendChild(imgWrapper);

    // document.body.appendChild(mainDiv);
// }