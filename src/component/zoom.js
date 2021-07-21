import { main } from "..";

import { Component } from "./component";

export class Zoom extends Component {
    constructor(container, src) {
        super(main.tool.createElement("div", "zoom", "Zoom", container));
        main.component.navigation.hide();

        this.image = main.tool.createElement("div", "image", "image zoom", this.container);
        this.image.style.backgroundImage = `url(${src}`;

        var imageSrc = new Image();
        imageSrc.onload = function() {
        var imageWidth = imageSrc.naturalWidth,
        imageHeight = imageSrc.naturalHeight,
        ratio = imageHeight / imageWidth;

        image.onmousemove = function(e) {
            var boxWidth = image.clientWidth,
                x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop,
                xPercent = x / (boxWidth / 100) + '%',
                yPercent = y / (boxWidth * ratio / 100) + '%';
            Object.assign(image.style, {
                backgroundPosition: xPercent + ' ' + yPercent,
                backgroundSize: imageWidth + 'px'
            });
        };
        image.onmouseleave = function(e) {
                Object.assign(image.style, {
                    backgroundPosition: 'center',
                    backgroundSize: 'contain'
                });
            };
        }
        imageSrc.src = src;
        this.show();
    }
}