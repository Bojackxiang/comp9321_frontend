import { Component, OnInit } from "@angular/core";
import { BuildCateListService } from "../services/build-cate-list.service";
import { PredictionService } from "../services/prediction.service";

@Component({
  selector: "app-prediction",
  templateUrl: "./prediction.component.html",
  styleUrls: ["./prediction.component.css"]
})
export class PredictionComponent implements OnInit {
  constructor(
    private buildList: BuildCateListService,
    private predictService: PredictionService
  ) {}

  dataList = [];

  ngOnInit() {
    this.buildCateList();
  }

  buildCateList() {
    this.buildList.ontainTheList().subscribe(data => {
      this.dataList = Object.keys(data);
    });
  }

  rate = "";
  size = "";
  review = "";
  cate = "";

  dowanloads;

  subform() {
    this.predictService.predictionForm(this.rate, this.review, this.size, this.cate)
      .subscribe(data=>{
        this.dowanloads = data;
        alert(parseInt(data))
      }, err=>{
        console.log(err);
      });
  }
}
