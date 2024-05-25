import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import BaseLayoutComponent from './layout/base-layout/base-layout.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        loadComponent: () => BaseLayoutComponent,
        loadChildren: () => import('./layout/base-layout/base.routes').then(r => r.default),
    },
];
