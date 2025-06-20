import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyListComponent } from './policy-list';

describe('PolicyList', () => {
  let component: PolicyListComponent;
  let fixture: ComponentFixture<PolicyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
