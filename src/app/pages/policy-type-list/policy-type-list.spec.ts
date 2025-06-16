import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyTypeList } from './policy-type-list';

describe('PolicyTypeList', () => {
  let component: PolicyTypeList;
  let fixture: ComponentFixture<PolicyTypeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyTypeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyTypeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
