import { Component, OnInit } from "@angular/core";
import { RequestTop10Service } from "../services/request-top10.service";
import { ActivatedRoute } from "@angular/router";
import { Chart } from "chart.js";

@Component({
  selector: "app-category-detail",
  templateUrl: "./category-detail.component.html",
  styleUrls: ["./category-detail.component.css"]
})
export class CategoryDetailComponent implements OnInit {
  top10 = [];
  titleList = [];
  subTitleList = []
  dataList = [];

  constructor(
    private requestTopService: RequestTop10Service,
    private router: ActivatedRoute
  ) {}

  BarChart = [];

  ngOnInit() {
    console.log("********* CategoryDetailComponent ");
    const category = this.router.snapshot.params.id;
    this.initialization(category);
  }

  initialization(category) {
    return this.requestTopService
      .requestTop5forcategory(category)
      .subscribe(data => {
        const keyList = Object.keys(data);

        keyList.map(x => {
          let subtitle = x.substr(0, 10)+'...';
          this.subTitleList.push(subtitle);
        });
        console.log(this.subTitleList);

        this.titleList = keyList;
        keyList.map(key => {
          this.dataList.push(data[key]);
          this.top10.push(`${key}/${data[key]}`);
        });
        this.BarChart = new Chart("barChart", {
          type: "bar",
          data: {
            labels: this.subTitleList,
            datasets: [
              {
                data: this.dataList,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)"
                ],
                borderColor: [
                  "rgba(255,99,132,1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255,99,132,1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)"
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            title: {
              text: "Bar Chart",
              display: true
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      });
  }
}
