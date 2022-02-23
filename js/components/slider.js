 export class Slider {
    constructor(el) {
        this.ctx=el;
    }
    init() {
        this.selectors = {
            slider: ['.js-slider'],
            sliderWrap: ['.js-slider-wrap'],
            sliderNav: ['.js-slider-nav'],
            sliderNavItem: ['.js-slider-nav-item'],
            sliderImages: ['.js-images'],
            imagesWrapper: ['.js-images-wrap'],
            imagesLink: ['.js-images-link'],
            imagesImg: ['.js-images-img']
        }
        this.classes = {
            slider: ['js-slider'],
            sliderWrap: ['js-slider-wrap'],
            sliderNav: ['js-slider-nav'],
            sliderNavItem: ['js-slider-nav-item'],
            sliderImages: ['js-images'],
            imagesWrapper: ['js-images-wrap'],
            imagesLink: ['js-images-link'],
            imagesImg: ['js-images-img']
        }

        this.navItems = this.ctx.querySelectorAll(this.selectors.sliderNavItem);
        this.navItemsArray = Array.from(this.navItems);
        this.imagesWrapper = this.ctx.querySelectorAll(this.selectors.imagesWrapper);
        this.counter = 0;
        this.navItems.forEach(el => {
            el.addEventListener("click",this.handleNavClick.bind(this))
        });
        this.navItems[0].classList.add('active');
        this.imagesWrapper[0].style.display = 'block';
    }

    handleNavClick(e) {
        this.removeActiveNavItem();
        this.clicked = e.target;
        this.clicked.classList.add('active');
        this.counter = this.navItemsArray.indexOf(this.clicked);
        this.fadingSlider(this.counter);
    }

    fadingSlider(index) {
        this.imagesWrapper.forEach(el => {
            el.style.display = 'none'
        })
        this.imagesWrapper[index].style.display = 'block';
        this.imagesWrapper[index].classList.add('fade');
    }


    removeActiveNavItem() {
        this.navItems.forEach(el => {
            el.classList.remove('active');
        })
    }
}


// function createSlider() {
//     let sliders = document.querySelectorAll("[data-component]");
//     sliders.forEach(el => {
//         let slider = new Slider(el);
//         slider.init();
//     })
// }

// createSlider();

