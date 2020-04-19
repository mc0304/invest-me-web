import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { HttpClientModule } from '@angular/common/http';
import { TDAmeritradeService } from './services/TDAmeritradeService';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestingComponent } from './components/investing/investing.component';
import { TradingComponent } from './components/trading/trading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OpenAccountComponent,
    TableComponent,
    InvestingComponent,
    TradingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [TDAmeritradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
