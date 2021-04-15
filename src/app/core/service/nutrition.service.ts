import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Nutrition} from '../models/nutrition';
import {map, catchError} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NutritionService {
    Base_url : string = `https://api.edamam.com/api/nutrition-data?app_id=b92dcd8f&app_key=229e9d381c70e9e1a3bbf3f8f5c01e76&ingr=`;
    constructor(private _httpClient : HttpClient) {}
    /* 
        many %20 quantity %20 name
    */
    getAnalysis(count : number, quantity : string, name : string): Observable < Nutrition > {
        return this._httpClient.get<Nutrition>(this.Base_url + `${count}%20${quantity}%20${name}`).pipe(catchError(this.handelError));
    }
    handelError(error : HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${
                error.error.message
            }`;
        } else {
            errorMessage = `Error Code: ${
                error.status
            }\nMessage: ${
                error.message
            }`;
        }
        return throwError(errorMessage);
    }
}
