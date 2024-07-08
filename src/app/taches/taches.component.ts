import { Component } from '@angular/core';
import { Tache } from '../shared/classes/tache';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {
  tache={} as Tache;

}
