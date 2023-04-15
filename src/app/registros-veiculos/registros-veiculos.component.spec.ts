import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosVeiculosComponent } from './registros-veiculos.component';

describe('RegistrosVeiculosComponent', () => {
  let component: RegistrosVeiculosComponent;
  let fixture: ComponentFixture<RegistrosVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
