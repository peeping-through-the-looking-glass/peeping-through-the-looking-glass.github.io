require("./detail.scss");

import { main } from "../index";
import { Component } from "./component";

export class Cartel extends Component {
    constructor(person, container) {
        super(main.tool.createElement("div", "Cartel", null, container));

        if (person.cartel) {
            main.tool.createElement("div", null, "title", this.container, person.cartel.title);
            main.tool.createElement("div", null, "material", this.container, person.cartel.material);
            main.tool.createElement("div", null, "description", this.container, person.cartel.description);
            
        }

        // const en = person.bio.en;
        // const fr = person.bio.fr;

        // if (person.bio.en.lenght > 0) {
            // const bio = main.tool.createElement("div", null, "bio", this.container, en);
        // } else {
        //     const bio = main.tool.createElement("div", null, "bio", this.container, fr);
        // }
    }

    truncate(text) {
        const len = main.tool.strlen(text);
        console.log(len);
        var limits = 370;
        if (len > limits) {
            let res = text.slice(0, -(len - limits)) + "..."; 
            main.tool.createElement("span", "readmore", "readmore", this.container, "read");
            return (res);
        }
        return (text);
        
    }
}