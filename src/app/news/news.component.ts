import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsService } from "../servicios/news.service";

@Component({
    selector: "News",
    templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {

    constructor(private news: NewsService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.news.crear('New 1 Angular update 10');
        this.news.crear('New 2 App for Iphone and Android');
        this.news.crear('New 3 Nodejs');
        this.news.crear('New 4 MongoDB');

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
