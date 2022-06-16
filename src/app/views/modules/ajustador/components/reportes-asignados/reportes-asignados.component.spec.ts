import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAsignadosComponent } from './reportes-asignados.component';

describe('ReportesAsignadosComponent', () => {
  let component: ReportesAsignadosComponent;
  let fixture: ComponentFixture<ReportesAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesAsignadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
