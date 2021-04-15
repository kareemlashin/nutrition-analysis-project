import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  from=new FormGroup({
    name:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required]),
    count:new FormControl('',[Validators.required,Validators.min(0)]),
  });
  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this._route.navigate(["/analysis",this.from.value.count,this.from.value.name,this.from.value.quantity]);

  }
}
