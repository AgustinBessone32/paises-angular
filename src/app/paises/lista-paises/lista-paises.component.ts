import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  paises!: any

  constructor(private paisService: PaisesService) {
  }

  ngOnInit(): void {
    this.paisService.getAllPaises().subscribe(data => {
      this.paisService.paises = data
      this.paises = this.paisService.paises
    })
  }

  searching(name: string) {
    if (name === '') {
      this.paisService.getAllPaises().subscribe(data => {
        this.paisService.paises = data
        this.paises = this.paisService.paises
      })
    } else {
      this.paisService.getForName(name).subscribe(data => {
        this.paisService.paises = data
        this.paises = this.paisService.paises

      })

    }
  }

  continenting(cont: string) {
    this.paisService.getForContinent(cont).subscribe(data => {
      this.paisService.paises = data
      this.paises = this.paisService.paises
    })
  }

  tocar() {
    console.log(this.paises)
  }



}



