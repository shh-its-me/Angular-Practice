import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    search: String = "";
    title !: String;
    currDate = new Date();

    bgClass : string = "navbar navbar-expand-lg bg-info"
    constructor() {
        this.title = "My Store";
    }

    onClickToggle() {
        this.bgClass = this.bgClass === "navbar navbar-expand-lg bg-info" ? "navbar navbar-expand-lg bg-dark-subtle" : "navbar navbar-expand-lg bg-info";
    }
}