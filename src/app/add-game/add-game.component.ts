import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html'
})
export class AddGameComponent {
  gameName: string = ''; // Inicializa aquí con una cadena vacía

  constructor(private gameService: GameService) {}

  onAddGame() {
    this.gameService.addGame(this.gameName);
  }
}
