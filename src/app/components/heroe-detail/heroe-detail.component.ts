import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styles: []
})
export class HeroeDetailComponent {

  heroe: Heroe;

  constructor(private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroeDetail( params['id'] );
     });
  }

}
