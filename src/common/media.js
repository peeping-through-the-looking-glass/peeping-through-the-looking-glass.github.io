import { main } from "./../index";

import felise from './../../static/img/felise.gif';
import __felise__ from './../../static/video/felise.mp4';

import hanna from './../../static/img/hanna.gif';
import __hanna__ from './../../static/video/hanna.mp4';

import caroline from './../../static/img/caroline.gif';
import caroline_normal from './../../static/img/caroline.png';
import caroline_orange from './../../static/img/caroline-orange.png';
import caroline_blue from './../../static/img/caroline-blue.png';
import caroline_pink from './../../static/img/caroline-pink.png';
import caroline_white from './../../static/img/caroline-white.png';

import fanny from './../../static/img/fanny.gif';
import __fanny__ from './../../static/img/fanny.jpg';

import stephania from './../../static/img/stephania.gif';
import __stephania__ from './../../static/video/stephania.mp4';

import margaux from './../../static/img/margaux.gif';
import __margaux1__ from './../../static/img/margaux-1.jpg';
import __margaux2__ from './../../static/img/margaux-2.jpg';

// Favicon
import favicon32x32 from "./../../static/img/favicon-32x32.png";
import favicon16x16 from "./../../static/img/favicon-16x16.png";

export const getMedia = () => {
    // Favicon
    const favicon32 = main.tool.createElement("link", null, null, document.head);
    favicon32.rel = "icon";
    favicon32.sizes = "32x32";
    favicon32.href = favicon32x32;

    const favicon16 = main.tool.createElement("link", null, null, document.head);
    favicon16.rel = "icon";
    favicon16.sizes = "16x16";
    favicon16.href = favicon16x16;

    main.data.person.forEach((input, id) => {
        switch (input.surname) {
            case "Félise":
                main.data.person[id]['src'] = felise;
                main.data.person[id]['video'] = __felise__;
                break;
            case "Hanna":
                main.data.person[id]['src'] = hanna;
                main.data.person[id]['video'] = __hanna__;
                break;
            case "Fanny":
                main.data.person[id]['src'] = fanny;
                main.data.person[id]['zoom'] = __fanny__;
                break;
            case "Caroline":
                main.data.person[id]['src'] = caroline;
                main.data.person[id]['normal'] = caroline_normal;
                main.data.person[id]['orange'] = caroline_orange;
                main.data.person[id]['blue'] = caroline_blue;
                main.data.person[id]['pink'] = caroline_pink;
                main.data.person[id]['white'] = caroline_white;
                break;
            case "Stefania":
                main.data.person[id]['src'] = stephania;
                main.data.person[id]['video'] = __stephania__;
                break;
            case "Margaux":
                main.data.person[id]['src'] = margaux;
                main.data.person[id]['first'] = __margaux1__;
                main.data.person[id]['second'] = __margaux2__;
                break;
        };
    });
};