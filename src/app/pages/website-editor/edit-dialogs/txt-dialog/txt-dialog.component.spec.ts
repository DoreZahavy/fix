import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtDialogComponent } from './txt-dialog.component';

describe('TxtDialogComponent', () => {
  let component: TxtDialogComponent;
  let fixture: ComponentFixture<TxtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxtDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TxtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
