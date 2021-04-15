import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "nutrition-analysis";
  dir:string='';
  mood:string='';
  loading:boolean=true;
  constructor() {
    this.dir=localStorage.getItem('dir')||'ltr';
    this.mood=localStorage.getItem('mood')||'light';

  }
  ngOnInit() {
    setTimeout(() => {
      this.loading=false;
    }, 1000);
  }
}
