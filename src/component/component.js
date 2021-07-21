require("./component.scss");

export class Component {
    constructor(container) {
        this.container = container;
        this.container.style.display = "none";
        this.container.style.opacity = "0";
        this.container.style.transition = "opacity 2s";
    }

    hide() {
        this.container.style.opacity = "0";
        this.container.style.display = "none";
    }

    show() {
        this.container.style.opacity = "1";
        this.container.style.display = "block";
    }

    blur() {
        this.container.style.filter = "blur(10px)";
    }
}