import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BuildCateListService {

  constructor(private http: HttpClient) { }

  ontainTheList(){
    const url = 'http://localhost:5000/catelist'
    return this.http.get(url);
  }
}
