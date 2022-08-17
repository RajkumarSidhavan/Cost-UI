import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CostComponent } from './pages/cost/cost.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfigService } from './services/app-config.service';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input"

import { CostService } from "./services/cost.service";

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CostComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatTableModule,
  ],
  exports: [MatTableModule, MatInputModule],
  providers: [
    CostService,
    //{ provide: ErrorHandler, useClass: AppErrorHandler },
    //{ provide: APP_INITIALIZER, useFactory: (_: AppSettingsService) => () => { }, multi: true },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => () => appConfigService.loadAppConfig()
    },
    /* { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true } */
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
