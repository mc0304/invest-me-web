import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenAccountComponent } from './components/open-account/open-account.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TradingComponent } from './components/trading/trading.component';
import { InvestingComponent } from './components/investing/investing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'open-account', component: OpenAccountComponent },
  { path: 'table', component: TableComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'trading', component: TradingComponent },
  { path: 'investing', component: InvestingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


