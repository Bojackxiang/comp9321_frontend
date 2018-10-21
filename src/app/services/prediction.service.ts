import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class PredictionService {

  
  constructor(private http: HttpClient) {}

  predictionForm(rate, review, size, cate) {

    const url = "http://localhost:5000/predict"

    // const header = new Headers();
    // console.log(rate, review, size, cate);

    return this.http.get(url, {params: {rating: rate, review: review, size: size, type: cate}})
  }
}
