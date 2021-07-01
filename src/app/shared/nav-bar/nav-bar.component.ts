import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private paisService: PaisesService) { }

  country!: string
  continent!: string

  @Output() searching = new EventEmitter<string>()
  @Output() continenting = new EventEmitter<string>()

  ngOnInit(): void {

    const search = document.getElementById('search')

    const keyUp = fromEvent(search!, 'keyup')

    keyUp.pipe(
      map((e: any) => e.currentTarget.value),
      debounceTime(1500)
    ).subscribe(name => {
      this.country = name
      this.searching.emit(this.country)
    })

    const select = document.getElementById('select')

    const selected = fromEvent(select!, 'click')

    selected.pipe(
      map((e: any) => e.currentTarget.value),
      debounceTime(1000)
    ).subscribe(cont => {
      this.continent = cont
      this.continenting.emit(this.continent)
    })

  }

}
