import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWebsitesComponent } from './account-websites.component';

describe('AccountWebsitesComponent', () => {
  let component: AccountWebsitesComponent;
  let fixture: ComponentFixture<AccountWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountWebsitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
