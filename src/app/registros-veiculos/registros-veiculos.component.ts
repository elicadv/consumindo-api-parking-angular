import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';
import { from } from 'rxjs';


interface RegistroVeiculo {
  id: number;
  parkingSpotNumber: number;
  licensePlateCar: string;
  brandCar: string;
  modelCar: string;
  colorCar: string;
  registrationDate: Date;
  responsibleName: string;
  apartment: number;
  block: string;
}

@Component({
  selector: 'app-registros-veiculos',
  templateUrl: './registros-veiculos.component.html',
  styleUrls: ['./registros-veiculos.component.css']
})
export class RegistrosVeiculosComponent implements OnInit {

  registros$: Observable<RegistroVeiculo[]> | undefined;

  constructor() { }

  ngOnInit() {
    this.carregarRegistros();
  }

  carregarRegistros() {
    this.registros$ = from(axios.get('http://localhost:8080/parking-spot'))
    .pipe(
        map(response => response.data)
    );

  }
}
