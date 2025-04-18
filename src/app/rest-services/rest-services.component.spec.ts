import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestServicesComponent } from './rest-services.component';

describe('RestServicesComponent', () => {
  let component: RestServicesComponent;
  let fixture: ComponentFixture<RestServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
