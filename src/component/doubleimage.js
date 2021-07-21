require("./doubleimage.scss");

import { main } from "..";

import { Component } from "./component";

export class DoubleImage extends Component {
    constructor(container, person) {
        super(main.tool.createElement("div", "DoubleImage", null, container));

        const first = main.tool.createElement("div", "first", "first", this.container);
        first.style.backgroundImage = `url(${person.first}`

        const second = main.tool.createElement("div", "second", "second", this.container);
        second.style.backgroundImage = `url(${person.second}`

        this.show();
    }
}