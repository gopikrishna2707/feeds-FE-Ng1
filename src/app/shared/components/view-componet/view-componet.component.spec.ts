import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponetComponent } from './view-componet.component';

describe('ViewComponetComponent', () => {
  let component: ViewComponetComponent;
  let fixture: ComponentFixture<ViewComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
