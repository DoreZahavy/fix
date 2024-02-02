import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCmpComponent } from './nav-bar-cmp.component';

describe('NavBarCmpComponent', () => {
  let component: NavBarCmpComponent;
  let fixture: ComponentFixture<NavBarCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
