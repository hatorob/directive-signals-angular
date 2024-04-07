import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignasLayoutComponent } from './signas-layout.component';

describe('SignasLayoutComponent', () => {
  let component: SignasLayoutComponent;
  let fixture: ComponentFixture<SignasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignasLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
