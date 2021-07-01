import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pais',
  templateUrl: './card-pais.component.html',
  styleUrls: ['./card-pais.component.css']
})
export class CardPaisComponent implements OnInit {

  @Input() pais: any

  constructor() { }

  ngOnInit(): void {

  }

}
