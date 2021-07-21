import { main } from "..";

import { Component } from "./component";

import ImageMap from "image-map";
import { Listenable } from "../common/listenable";

import audio from "./../../static/audio/caroline.wav";
export class Mapping extends Component {
    constructor(container, person) {
        super(main.tool.createElement("div", "Mapping", "mapping", container));
        this.indexLoading$ = new Listenable(0);
        this.person = person;
        main.component.navigation.hide();

        this.isReady = false;

        this.audio = new Audio(audio);

        main.component.spinner.show();
        main.component.spinner.percent.innerText = "0%";

        this.images = [];

        this.shape = {
            blue: "1052,588,1043,534,1094,383,1279,255,1390,245,1501,279,1516,119,1596,27,1764,14,1916,43,1977,147,2009,410,2187,335,2282,335,2403,408,2477,583,2378,600,2284,672,2224,884,2257,974,2416,999,2513,1075,2552,1174,2553,1302,2460,1470,2386,1509,2236,1488,2168,1453,2233,1541,2197,1723,2107,1625,1876,1650,1728,1815,1715,1830,1758,1917,1688,1954,1577,1958,1424,1874,1535,1812,1604,1670,1519,1507,1406,1444,1210,1456,1198,1435,1246,1286,1222,1193,1146,1129,1016,1103,881,1129,846,1060,842,910,862,802,928,720,1012,689,1126,703,1121,681,1072,629,1062,611",
            orange: "8,1710,17,1661,71,1616,231,1554,320,1552,243,1431,281,1341,427,1251,571,1243,661,1274,708,1316,732,1377,740,1278,774,1196,883,1129,1012,1104,1144,1130,1224,1196,1246,1289,1198,1435,1213,1459,1406,1444,1522,1509,1606,1673,1538,1810,1425,1874,1582,1961,1673,2044,1704,2185,1682,2322,1620,2392,1586,2413,1501,2404,1440,2360,1400,2342,1434,2411,1463,2491,1496,2512,1491,2590,1452,2660,1397,2700,1312,2730,1240,2741,1173,2712,1115,2672,1057,2563,1029,2490,1022,2517,1039,2605,1008,2674,935,2754,798,2775,704,2769,639,2747,616,2718,548,2600,549,2553,595,2474,623,2379,669,2305,648,2298,507,2332,475,2366,405,2389,292,2377,214,2281,180,2208,158,2141,160,2080,244,2009,294,1971,203,1946,123,1932,71,1899,23,1846,1,1795",
            white: "1495,2511,1611,2541,1692,2566,1673,2608,1668,2706,1731,2779,1856,2848,1969,2847,2024,2842,2032,2867,2004,2972,2060,3069,2113,3138,2206,3175,2273,3165,2342,3127,2408,2999,2438,2961,2485,3005,2544,3082,2677,3083,2780,3033,2822,2947,2849,2863,2815,2769,2752,2652,2704,2582,2713,2574,2769,2611,2783,2611,2851,2651,2899,2677,3020,2672,3106,2628,3124,2581,3125,2479,3099,2417,3091,2351,3080,2312,3002,2256,2974,2255,2994,2230,3036,2213,3074,2156,3095,2128,3121,2106,3112,2051,3117,1999,3111,1990,3070,1974,3004,1923,2985,1897,2976,1857,2891,1823,2842,1844,2760,1857,2661,1886,2614,1890,2604,1870,2607,1838,2668,1706,2676,1649,2638,1561,2596,1536,2465,1459,2459,1472,2384,1511,2268,1495,2233,1540,2234,1549,2197,1725,2106,1626,1874,1650,1715,1831,1770,1950,1887,2061,1917,2094,1691,2123,1704,2186,1683,2324,1591,2412,1506,2406,1459,2374,1400,2342,1462,2476,1462,2490,1481,2501",
            pink: "2476,584,2536,601,2635,610,2851,730,2882,754,2884,726,2794,618,2707,462,2695,408,2724,332,2809,270,2946,193,3012,183,3063,191,3110,218,3210,296,3226,347,3244,416,3227,486,3241,552,3231,688,3241,758,3234,796,3344,693,3431,598,3503,538,3574,528,3621,511,3648,489,3734,504,3818,562,3866,627,3871,718,3902,783,3874,906,3797,957,3620,1021,3559,1027,3502,1081,3517,1097,3644,1167,3799,1262,3856,1293,3883,1363,3920,1371,3940,1394,3936,1476,3919,1532,3833,1645,3803,1639,3766,1665,3665,1678,3632,1693,3615,1706,3576,1691,3552,1684,3472,1636,3483,1667,3495,1688,3497,1739,3512,1778,3461,1877,3434,1926,3407,1946,3373,1945,3332,1981,3229,1992,3129,2003,3105,1989,3056,1966,3003,1923,2983,1890,2975,1858,2977,1831,2986,1811,2971,1721,2925,1783,2898,1818,2888,1824,2834,1848,2766,1854,2704,1875,2630,1890,2615,1889,2604,1866,2611,1823,2653,1742,2673,1688,2677,1647,2644,1575,2639,1560,2467,1459,2553,1302,2553,1173,2513,1074,2418,1001,2260,974,2224,883,2282,672,2379,599",
        };

        this.layers = main.tool.createElement("div", "layers", null, this.container);
        this.layers.style.display = "none";

        this.orange = this.loadImage(person.orange);
        this.pink = this.loadImage(person.pink);
        this.blue = this.loadImage(person.blue);
        this.white = this.loadImage(person.white);
        this.normal = this.loadImage(person.normal);

        this.orange.style.display = "none";
        this.blue.style.display = "none";
        this.pink.style.display = "none";
        this.white.style.display = "none";

        this.indexLoading$.didChange(() => {
            main.component.spinner.percent.innerText = `${~~((this.indexLoading$.value / 5) * 100)}%`;
            if (this.indexLoading$.value == 5) {
                this.layers.style.display = "block";
                main.component.spinner.hide();
                this.isReady = true;

                this.createMap();
                this.normal.border = "0";
                this.normal.useMap = "#imagemap";
                ImageMap('img[usemap]');
            }
        });

        this.show();
    }

    loadImage(src) {
        const imageElement = main.tool.createElement("img", null, "layer", this.layers);
        const img = new Image();
        img.onload = () => {
            ++this.indexLoading$.value;
        };
        img.src = src;
        imageElement.src = img.src;
        return imageElement;
    }

    createMap() {
        const map = main.tool.createElement("map", null, "layer", this.layers);
        map.name = "imagemap";
        var form = "poly";

        for (const i in this.shape) {
            const area = main.tool.createElement("area", null, null, map);
                area.shape = form;
                area.coords = this.shape[i];
                area.id = i;
                area.onclick = () => {
                    if (this.isReady) {
                        this.audio.play(0);
                        switch (i) {
                            case "blue":
                                this.audio.currentTime = 0;
                                break;
                            case "orange":
                                this.audio.currentTime = 100;
                                break;
                            case "white":
                                this.audio.currentTime = 200;
                                break;
                            case "pink":
                                this.audio.currentTime = 300;
                                break;
                        }
                    }
                };
                area.onmouseover = () => {
                    this.changeImg(i);
                };
        }
    };

    changeImg(name) {
        switch (name) {
            case "orange":
                this.normal.src = this.orange.src;
                break;
            case "blue":
                this.normal.src = this.blue.src;
                break;
            case "pink":
                this.normal.src = this.pink.src;
                break;
            case "white":
                this.normal.src = this.white.src;
                break;
        }
    };
}