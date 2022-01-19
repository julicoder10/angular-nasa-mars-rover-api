import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PrincipalSectionComponent } from './components/principal-section/principal-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
