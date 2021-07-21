import { main } from "../index";
import { Listenable } from "./listenable";
export class Route {
    start() {
        this.hash$ = new Listenable(location.hash);
        this.currentPage$ = new Listenable("");

        main.component.spinner.show();

        window.onhashchange = () => {
            location.hash = "";
        };

        this.hash$.didChange(() => {
            console.log("new hash = " + this.hash$.value);
        });

        this.currentPage$.didChange(() => {
            this.tree();
        })

        this.currentPage$.value = "home";
    };

    params() {
        switch (location.search) {
            case "?detail":
                this.hash()
                break;
            case "?about":
                break;
            default:
                main.component.error.show();
                break;
        }
    }

    tree() {
        const page = this.currentPage$.value;
        switch (page) {
            case "home":
                console.log("home");
                this.display(main.component.stack);
                main.component.navigation.show();
                // Need to shuffle element without reload items
                // main.component.stack.shuffle();
            break;
            case "Hanna":
            case "Caroline":
            case "Fanny":
            case "Félise":
            case "Stefania":
            case "Margaux":
                main.component.navigation.hide();
                main.component.detail.load();
                this.display(main.component.detail);
            break;
            default:
                this.display(main.component.error);
        }
    }

    display(selectedComponent) {
        for (const listedComponent in main.component) {
            if (listedComponent != "spinner" 
            && listedComponent != "navigation"
            && listedComponent != "timer") {
                const mainComponent = main.component[listedComponent];
                if (mainComponent == selectedComponent) main.component[listedComponent].show();
                else main.component[listedComponent].hide();
            }
        }
    }
}