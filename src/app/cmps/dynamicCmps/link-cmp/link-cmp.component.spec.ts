import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCmpComponent } from './link-cmp.component';

describe('LinkCmpComponent', () => {
  let component: LinkCmpComponent;
  let fixture: ComponentFixture<LinkCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
