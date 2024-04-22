import { Component, Input } from '@angular/core';
import { Task } from '../../util/Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() task : any;
  // @Input() cat: any;

  addStyleOnCard(cat : any) {
    if ( cat === 'hold') {
      return {'background': 'linear-gradient(to bottom, #33ccff 40%, #ff99cc 100%)' };
    } else if (cat === 'new'){
      return {'background' : 'linear-gradient(to bottom, #66ffcc 40%, #66ccff 100%)'} ;
    } else if (cat == 'in progress'){
      return {'background' : 'linear-gradient(to bottom, #ffcc00 0%, #ffcccc 100%)'} ;
    } else {
      return {'background' : 'linear-gradient(to bottom, #ffffff26 0%, #00000026 100%),radial-gradient(at top center, #ffffff66 0%, #00000066 120%) #989898'} ;
    }
  }
  
}
