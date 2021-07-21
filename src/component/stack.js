require("./stack.scss");

import { getMedia } from "../common/data";
import { Listenable } from "../common/listenable";
import { route } from "../index";
import { main } from "../index";
import { Component } from "./component";

export class Stack extends Component {
    constructor() {
        super(main.tool.createElement("div", "Stack", "stack", main.configuration.root));

        this.indexLoaded$ = new Listenable(0);
        this.media = main.data.person;
        this.box = [];

        this.indexLoaded$.didChange(() => {
            const percent = ~~((this.indexLoaded$.value / 6) * 100);
            main.component.spinner.percent.innerText = `${percent}%`;
            if (this.indexLoaded$.value == 6) {
                this.box.forEach((box) => {
                    box.style.display = "block";
                });
                main.component.spinner.hide();
            }
        });

        this.shuffle(this.media);
        this.load();
    }

    load() {
        this.media.forEach((item, i) => {
            const container = main.tool.createElement("div", i, "rack", this.container);
            container.onclick = () => { route.currentPage$.value = item.surname; };

            this.box[i] = main.tool.createElement("img", i, "item", container);
            this.box[i].style.display = "none";
            this.box[i].style.height = `${100 / this.media.length}%`;

            let img = new Image();
            img.onload = () => { this.indexLoaded$.value++; }
            img.src = item.src;

            this.box[i].src = img.src;
        });
    }

    shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        this.media = array;
    }

    swap(obj1, obj2) {
        var tmp = document.createElement("div");

        obj1.parentNode.insertBefore(tmp, obj1);
        obj2.parentNode.insertBefore(obj1, obj2);
        tmp.parentNode.insertBefore(obj2, tmp);
        tmp.parentNode.removeChild(tmp);
    }

    clean(element) {
        while (element.hasChildNodes()) {
            element.removeChild(element.lastChild);
        }
    }
}