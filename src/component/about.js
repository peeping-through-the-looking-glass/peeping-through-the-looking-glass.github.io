require("./about.scss");

import __poster__ from "../../static/img/poster.png";
import close from "./../../static/img/close.png"

import { main } from "../index";
import { Component } from "./component";

export class About extends Component {
    constructor() {
        super(main.tool.createElement("div", "About", null, main.configuration.root));
        this.container.style.cursor = `url("${close}") 15 20, auto`;
        this.container.onclick = (event) => this.hide();
        const poster = main.tool.createElement("div", null, "poster", this.container);
        poster.style.height = "600px";
        poster.style.backgroundImage = `url("${__poster__}")`;
        main.tool.createElement("div", null, "name", this.container, main.data.exhibition.name);
        main.tool.createElement("div", null, "description", this.container, main.data.exhibition.description);
        main.tool.createElement("div", null, "description", this.container, main.data.exhibition.thanks);
        main.tool.createElement("div", null, "description", this.container, main.data.exhibition.location);
    }
}