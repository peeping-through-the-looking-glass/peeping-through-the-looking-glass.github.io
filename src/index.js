// Style
import "./common/style.scss";

// Common
import { Configuration } from "./common/configuration";
import { Data } from "./common/data";
import { Tool } from "./common/tool";
import { Route } from "./common/route";
import { getMedia } from './common/media';

// Component
import { Timer } from "./component/timer";
import { Navigation } from './component/navigation';
import { Stack } from './component/stack';
import { Detail } from './component/detail';
import { Error } from './component/error';
import { Spinner } from './component/spinner';

// Main
export let main = {
    configuration: Configuration,
    tool: new Tool(),
    data: Data,
};

// Fill data with media file
getMedia();

let component = { 
    component: {
        spinner: new Spinner(),
        navigation: new Navigation(),
        stack: new Stack(),
        detail: new Detail(),
        error: new Error(),
    }
};

main = { ...main, ...component };

console.log(main);

export const route = new Route();

document.addEventListener("DOMContentLoaded", (event) => {
    route.start();
});