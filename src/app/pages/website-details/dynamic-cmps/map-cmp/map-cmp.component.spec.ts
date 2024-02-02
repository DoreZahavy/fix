import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCmpComponent } from './map-cmp.component';

describe('MapCmpComponent', () => {
  let component: MapCmpComponent;
  let fixture: ComponentFixture<MapCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
