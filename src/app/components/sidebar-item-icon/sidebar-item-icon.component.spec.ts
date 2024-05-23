import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarItemIconComponent } from './sidebar-item-icon.component';

describe('SidebarItemIconComponent', () => {
  let component: SidebarItemIconComponent;
  let fixture: ComponentFixture<SidebarItemIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarItemIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarItemIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
