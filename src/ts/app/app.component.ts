import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `<div>
        <h1>{{message}}</h1>
    </div>`,
})
export class AppComponent {

    public header: string = "Color Tool";

}
