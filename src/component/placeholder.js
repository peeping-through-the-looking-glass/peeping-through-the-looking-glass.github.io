import { main } from "..";

import { Component } from "./component";

export class Placeholder extends Component {
    constructor(container, src) {
        super(main.tool.createElement("div", "image", "image", container));
        // main.component.navigation.hide();
        this.container.style.backgroundImage = `url(${src}`;
        this.show();
    }
}