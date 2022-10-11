import { Injectable } from '@angular/core';
import { PlayStatus } from '../components/play.status';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private getComputerChoice(): string {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  play(choice: string) : PlayStatus{
    const playUserComp = choice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
    let playStatus!: {
      message: string;
      userAdd: number;
      compAdd: number;
    };
    switch(playUserComp){
       // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
          playStatus = {
            message: 'Le ganaste a la compu',
            userAdd: 1,
            compAdd: 0,
          };
          break;
          case 'rp':
          case 'ps':
          case 'sr':
              playStatus = {
                message: 'Te gano la compu',
                userAdd: 0,
                compAdd: 1,
              };
              break;
            case 'rr':
            case 'pp':
            case 'ss':
                  playStatus = {
                    message: 'Ha sido un empate!',
                    userAdd: 0,
                    compAdd: 0,
                  };
                  break;
      }
              return playStatus;

    }
  }

