require("./spinner.scss");

import { main } from "..";
import { Component } from "./component";

export class Spinner extends Component {
    constructor() {
        super(main.tool.createElement("div", "Spinner", null, main.configuration.root));

        // this.loading = main.tool.createElement("div", null, "spinner", this.container);
        this.percent = main.tool.createElement("div", null, "percent", this.container);
    }
}