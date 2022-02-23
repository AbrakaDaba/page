import { Slider } from "./js/components/slider.js";

const classes = {
    Slider
}

let components = document.querySelectorAll("[data-component]");

function createComponent() {
    components.forEach(el => {
        let className=el.getAttribute("data-component");
        const newComponent = new classes[className](el);
        console.log(newComponent);
        newComponent.init();
    })
}

createComponent();