import { Component, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { menuData } from '../../layout/menu-data';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { ISidebarModel } from '../../layout/models/layoutModels';
import { SidebarItemIconComponent } from '../sidebar-item-icon/sidebar-item-icon.component';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule,
    MatIconModule, SidebarItemComponent,
    SidebarItemIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  protected menuData: Signal<ISidebarModel[]> = signal(menuData);
  showFiller = false;
}
