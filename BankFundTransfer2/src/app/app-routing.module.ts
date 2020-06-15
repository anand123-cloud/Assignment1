import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/fundtransfer/login/login.component';
import { DashboardComponent } from '../app/fundtransfer/dashboard/dashboard.component';
import { ProfileComponent } from './fundtransfer/profile/profile.component';
import { TransactionsComponent } from './fundtransfer/transactions/transactions.component';
import { BenificiaryListComponent } from './fundtransfer/benificiary-list/benificiary-list.component';



const routes: Routes = [
  {path: 'login' , component: LoginComponent },
  //{path: 'dashboard' , component: DashboardComponent },
 // {path: 'dashboard', component: BenificiaryComponent},
  {path: 'profile' , component: ProfileComponent },
  {path: 'benificiary-list' , component: BenificiaryListComponent },
  {path: 'transactions' , component: TransactionsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }