import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  result!: string; 
  pointsUser = 0;
  pointsComp =  0;
  constructor( private game: GameService) { }

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  play(choice: string){
    const result = this.game.play(choice);

    this.result = result.message;
    this.pointsComp += result.compAdd;
    this.pointsUser += result.userAdd;


  }

}
