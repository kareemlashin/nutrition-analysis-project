import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  @Output() dir: EventEmitter<string> = new EventEmitter<string>();
  @Output() mood: EventEmitter<string> = new EventEmitter<string>();
  lang: string = "";
  checked:string='light';
  constructor(public translate: TranslateService) {
    this.lang = localStorage.getItem("lang") || "en";

    translate.setDefaultLang(this.lang);
  }
  ngOnInit(): void {
    this.checked=localStorage.getItem("mood")||'light';
  }
  switchLang(lang: string) {
    localStorage.setItem("lang", lang);
    this.lang = lang;
    this.translate.use(lang);
    if (lang == "ar") {
      localStorage.setItem("dir", "rtl");
      this.dir.emit("rtl");
    } else {
      localStorage.setItem("dir", "ltr");
      this.dir.emit("ltr");
    }
  }
  change() {
    this.mood.emit("dark");
    localStorage.setItem("mood", 'dark');

  }
  changeMood(event:Event){
    let body = document.getElementsByTagName('body')[0];

  let e=(<HTMLInputElement>event.target).checked;
    if(e==true){
      this.mood.emit("dark");
      localStorage.setItem("mood", 'dark');  
    }else{
      this.mood.emit("light");
      localStorage.setItem("mood", 'light');

    }
  }
}
