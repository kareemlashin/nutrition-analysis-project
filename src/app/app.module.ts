import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// ? component
import { AppComponent } from './app.component';
import { LoadingComponent } from './component/loading/loading.component';
import { NavComponent } from './component/nav/nav.component';
import { SearchComponent } from './pages/search/search.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';
// todo Modules
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    NavComponent,
    SearchComponent,
    AnalysisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })

  ],
  exports: [TranslateModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}