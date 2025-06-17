import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthesDetailsComponent } from './othes-details.component';

describe('OthesDetailsComponent', () => {
  let component: OthesDetailsComponent;
  let fixture: ComponentFixture<OthesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
