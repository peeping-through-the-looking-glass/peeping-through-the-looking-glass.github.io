require("./detail.scss");

import { main } from "../index";
import { Component } from "./component";

export class Bio extends Component {
    constructor(person, container) {
        super(main.tool.createElement("div", "Bio", null, container));

        main.tool.createElement("div", null, "bio", this.container, `${person.surname} ${person.lastname}, ${person.location.city} ${person.location.country}`);

        const en = person.bio.en;
        const fr = person.bio.fr;

        const bio = main.tool.createElement("div", null, "bio", this.container);

        main.tool.createElement("div", null, "left", bio, en);
        main.tool.createElement("div", null, "right", bio, fr);
    }
}