import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {
  plantas: Array<Planta> = [];
  total_exterior:number = 0;
  total_interior:number = 0;

  constructor(private plantaService:PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.total_exterior = this.plantas.filter(planta => planta.tipo == 'Exterior').length;
      this.total_interior = this.plantas.filter(planta => planta.tipo == 'Interior').length;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
