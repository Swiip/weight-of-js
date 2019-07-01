import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import * as AngularMaterial from "@angular/material";
import * as AngularRouter from "@angular/router";
import * as NgRxStore from "@ngrx/store";

console.log("full!", AngularMaterial, AngularRouter, NgRxStore);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
