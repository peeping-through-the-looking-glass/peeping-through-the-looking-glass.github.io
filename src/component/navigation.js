require("./navigation.scss");

import { main } from "../index";
import { About } from "./about";
import { Component } from "./component";

export class Navigation extends Component {
    constructor() {
        super(main.tool.createElement("div", "Navigation", "navigation", main.configuration.root));
        const brand = main.tool.createElement("div", "menu-list", null, this.container);
        const home = main.tool.createElement("a", "home", "link", brand);

        main.tool.createElement("span", null, null, home, main.data.exhibition.name + " " + main.data.exhibition.name + " " + main.data.exhibition.name);

        this.about = new About();

        home.onclick = (event) => {
            this.about.show();
        };
    };
}