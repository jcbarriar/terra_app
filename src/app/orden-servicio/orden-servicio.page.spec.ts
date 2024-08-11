import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenServicioPage } from './orden-servicio.page';

describe('OrdenServicioPage', () => {
  let component: OrdenServicioPage;
  let fixture: ComponentFixture<OrdenServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
