import { Component, OnInit } from '@angular/core';
import {BuildCateListService} from '../services/build-cate-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  dataList = [];
  constructor(private buildCateListService : BuildCateListService) { }

  ngOnInit() {
    this.initalization();
  }

  initalization(){
    this.buildCateListService.ontainTheList().subscribe(
      data=>{
        this.dataList = Object.keys(data)
      }
    )
  }

}
