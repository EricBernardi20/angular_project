import { Component } from '@angular/core';
import { BodyCards } from './body-cards';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  cards: BodyCards[] = [
    {
      title: 'Team Play',
      description: 'We believe in working together',
      image: '../../assets/imagens/startup1.jpg'
    },
    {
      title: 'Team Play ',
      description: 'We believe in working together',
      image: '../../assets/imagens/startup2.jpg'
    },
    {
      title: 'Team Play ',
      description: 'We believe in working together',
      image: '../../assets/imagens/startup3.jpg'
    },
  ]
}
