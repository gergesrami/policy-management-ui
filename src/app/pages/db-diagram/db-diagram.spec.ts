import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbDiagramComponent } from './db-diagram';

describe('DbDiagram', () => {
  let component: DbDiagramComponent;
  let fixture: ComponentFixture<DbDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbDiagramComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DbDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
