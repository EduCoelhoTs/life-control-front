import { ChangeDetectionStrategy, Component, SimpleChanges, inject, input } from '@angular/core';
import { ISidebarModel } from '../../layout/models/layoutModels';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sidebar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, NgClass],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  public itemData = input.required<ISidebarModel>();
  private router = inject(Router);

  protected isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
