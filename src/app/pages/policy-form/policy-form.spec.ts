import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFormComponent } from './policy-form';

describe('PolicyForm', () => {
  let component: PolicyFormComponent;
  let fixture: ComponentFixture<PolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
