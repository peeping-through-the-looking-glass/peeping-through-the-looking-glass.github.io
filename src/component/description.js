require("./detail.scss");

import { main } from "../index";
import { Component } from "./component";

export class Bio extends Component {
    constructor(person) {
        super(main.tool.createElement("div", "Description", null, main.configuration.root));
        console.log(person);

        if (person.bio.en.lenght > 0) main.tool.createElement("div", "bio", "bio", this.container, person.bio.en);
        else main.tool.createElement("div", "bio", "bio", this.container, person.bio.fr);
    }
} 