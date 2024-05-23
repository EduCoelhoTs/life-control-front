import { ISidebarModel } from "./models/layoutModels";

export const menuData: ISidebarModel[] = [
    {
        path: '',
        title: 'Dashboard',
        icon: 'home',
        type: 'default'
    },
    {
        path: 'finance',
        title: 'Financeiro',
        icon: 'payments',
        type: 'default'
    }
]