import { Routes } from '@angular/router';
import HomeComponent from '../pages/home/home.component';
import FinanceComponent from '../pages/finance/finance.component';


const routes: Routes = [
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

export default routes;