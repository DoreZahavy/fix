import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBarCmpComponent } from './icon-bar-cmp.component';

describe('IconBarCmpComponent', () => {
  let component: IconBarCmpComponent;
  let fixture: ComponentFixture<IconBarCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBarCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconBarCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
