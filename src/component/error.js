require("./error.scss");

import { main } from "../index";
import { Component } from "./component";

export class Error extends Component {
    constructor() {
        super(main.tool.createElement("div", "404", "404", main.configuration.root));
        main.tool.createElement("div", "Error", "", this.container, "404 Not Found");
    }
}