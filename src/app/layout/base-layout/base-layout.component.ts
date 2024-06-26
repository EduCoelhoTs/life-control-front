import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RouterOutlet, provideRouter } from '@angular/router';

@Component({
  selector: 'base-layout',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export default class BaseLayoutComponent {

  constructor() {
    console.log('BaseLayoutComponent');
  }

}
