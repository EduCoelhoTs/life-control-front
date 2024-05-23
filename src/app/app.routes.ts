import { Routes } from '@angular/router';
import FinanceComponent from './pages/finance/finance.component';
import { BaseLayoutComponent } from './layout/component/base-layout/base-layout.component';
import HomeComponent from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => HomeComponent,
        pathMatch: 'full',
        title: 'Home'
    },
    {
        path: 'finance',
        loadComponent: () => FinanceComponent,
        title: 'Finance'
    }
];
