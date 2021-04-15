import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Nutrition } from './../../core/models/nutrition'
import { NutritionService } from '../../core/service/nutrition.service'

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  name: string | any = '';
  quantity: string | any = '';
  count: number | any = 0;
  Nutrition: Nutrition | any;
  spinner: boolean = true;
  daily:boolean=true;
  manyLabels:number=4;
  moreLabels:boolean=true;
  error:boolean=false;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _NutritionService: NutritionService,
    private Router:Router
  ) {
    this.name = this._ActivatedRoute.snapshot.paramMap.get('name')
    this.quantity = this._ActivatedRoute.snapshot.paramMap.get('quantity')
    this.count = this._ActivatedRoute.snapshot.paramMap.get('count')
  }

  ngOnInit(): void {
    this.getNutrition()
  }
  getNutrition() {
    this.spinner = true
    this._NutritionService
      .getAnalysis(this.count, this.quantity, this.name)
      .subscribe(
        (data) => {
          this.spinner = false;
          this.Nutrition=data;
          this.error=false;
        },
        (err) => {
          this.spinner = false;
          this.error=true;

        },
      )
  }
  moreDaily(){
    this.daily=false;
  }
  lessDaily(){
    this.daily=true;

  }
  Labels(){
this.manyLabels=this.Nutrition.healthLabels.length;
this.moreLabels=false;
  }
  lessLabels(){
    this.moreLabels=true;
    this.manyLabels=4;

  }
  home(){
this.Router.navigate(['/search']);
  }
}
