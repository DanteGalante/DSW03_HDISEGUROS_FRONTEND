import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictaminarReporteComponent } from './dictaminar-reporte.component';

describe('DictaminarReporteComponent', () => {
  let component: DictaminarReporteComponent;
  let fixture: ComponentFixture<DictaminarReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictaminarReporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DictaminarReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
