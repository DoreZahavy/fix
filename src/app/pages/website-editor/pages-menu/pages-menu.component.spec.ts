import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMenuComponent } from './pages-menu.component';

describe('PagesMenuComponent', () => {
  let component: PagesMenuComponent;
  let fixture: ComponentFixture<PagesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
