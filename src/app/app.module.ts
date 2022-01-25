import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { ThousandsPipe } from './pipes/thousands.pipe';
import { ColorsPipe } from './pipes/colors.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ThousandsPipe,
    ColorsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
