import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarDetailsComponent } from './donar-details.component';

describe('DonarDetailsComponent', () => {
  let component: DonarDetailsComponent;
  let fixture: ComponentFixture<DonarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonarDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
