import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RequestTop10Service {
  constructor(private _http: HttpClient) {}

  requestTop5forcategory(category) {
    console.log("********* request Top5 for category service ");
    return this._http.get("http://localhost:5000/genres", {
      params: { type: category }
    });
  }
}
