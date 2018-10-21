import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { RouterModule, Routes } from "@angular/router";
import { CategoryComponent } from "./category/category.component";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { HttpClientModule } from "@angular/common/http";
import { RequestTop10Service } from "./services/request-top10.service";
import { ChartsModule } from "ng2-charts";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule } from "@angular/forms";
import { CategoryListComponent } from "./category-list/category-list.component";
import { HomeComponent } from "./home/home.component";
import { PredictionComponent } from './prediction/prediction.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "whoweare", component: WhoWeAreComponent },
  {
    path: "categorylist",
    component: CategoryListComponent
  },
  {
    path: "category/:id",
    component: CategoryDetailComponent
  },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "prediction", component: PredictionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhoWeAreComponent,
    CategoryComponent,
    CategoryDetailComponent,
    SignInComponent,
    SignUpComponent,
    CategoryListComponent,
    HomeComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [RequestTop10Service, ChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
