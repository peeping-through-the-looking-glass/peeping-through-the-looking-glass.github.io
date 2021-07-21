require("./player.scss");

import play_icon from "./../../static/img/play.png";
import pause_icon from "./../../static/img/pause.png";

import { main } from "..";
import { Component } from "./component";

export class Player extends Component {
    constructor(container, src) {
        super(main.tool.createElement("video", "Player", "player", container));
        this.container.classList.add("cursor-pause");
        this.progress = main.tool.createElement("progress", "progress", "progress", container);
        this.progress.max = "100";
        this.progress.value = "0";

        this.state = "play";
        this.container.src = src;
        this.container.autoplay = true;
        this.container.loop = true;
        this.container.load();
        this.container.onloadeddata = () => {
            this.container.play();
            setInterval(() => {
            this.progress.value = ~~((this.container.currentTime / this.container.duration) * 100);
            });
        };

        this.container.onclick = (event) => {
            if (this.state == "play") {
                this.container.classList.remove("cursor-pause");
                this.container.classList.add("cursor-play");
                this.container.pause();
                this.state = "pause";
            } else {
                this.container.classList.remove("cursor-play");
                this.container.classList.add("cursor-pause");
                this.container.play();
                this.state = "play";
            }
        };
        
        this.show();
    };

    controls(event) {
        if (this.state == "play") {
            this.container.style.cursor = `url("${pause_icon}"), auto`;
            this.container.pause();
            this.state = "pause";
        } else {
            this.container.style.cursor = `url("${play_icon}"), auto`;
            this.container.play();
            this.state = "play";
        }
    };
}