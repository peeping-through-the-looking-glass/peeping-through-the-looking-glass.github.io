require("./detail.scss");

import { main, route } from "..";
import { Component } from "./component";
import { Player } from "./player";
import { DoubleImage } from "./doubleimage";
import { Zoom } from "./zoom";
import { Mapping } from "./mapping";
import { Bio } from "./bio";
import { Cartel } from "./cartel";

export class Detail extends Component {
    constructor () {
        super(main.tool.createElement("div", "Detail", "detail", main.configuration.root));
    }

    load() {
        main.component.navigation.hide();

        const person = main.data.person[main.data.person.findIndex(a => a.surname == route.currentPage$.value)];
        this.__container__ = main.tool.createElement("div", "content", "content", this.container);

        switch (person.surname) {
            case "Hanna":
                this.media = new Player(this.__container__, person.video);
                break;
            case "Caroline":
                this.media = new Mapping(this.__container__, person);
                break;
            case "Fanny":
                this.media = new Zoom(this.__container__, person.zoom);
                break;
            case "Félise":
                this.media = new Player(this.__container__, person.video);
                break;
            case "Stefania":
                this.media = new Player(this.__container__, person.video);
                break;
            case "Margaux":
                this.media = new DoubleImage(this.__container__, person);
                break;
        }

        this.bio = new Bio(person, this.__container__);
        this.cartel = new Cartel(person, this.__container__);

        this.title = main.tool.createElement("div", "title", "controls-right", this.__container__, "Information");
        this.home = main.tool.createElement("a", "home", "controls-left", this.__container__, "Home");

        this.home.onclick = (() => {
            route.currentPage$.value = "home";
            this.__container__.remove();
            if (this.media instanceof Mapping) this.media.audio.pause();
        });

        this.title.onclick = () => { this.displayInfo(); this.title.style.display = "none"; };

        this.show();
    }

    displayInfo () {
        this.bio.show();
        this.media.container.style.filter = "blur(80px)";
        const close = main.tool.createElement("div", "title", "controls-right", this.__container__, "Close");
        close.onclick = () => { 
            this.closeInfo(); 
            this.title.style.display = "block"; 
            close.remove() 
        };
    }

    closeInfo () {
        this.bio.hide();
        this.media.container.style.height = "100%";
        this.media.container.style.filter = "blur(0px)";
    }
}