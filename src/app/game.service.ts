// src/app/game.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games = [{ name: 'The Legend of Zelda' }, { name: 'Super Mario' }];

  getGames() {
    return this.games;
  }

  addGame(gameName: string) {
    this.games.push({ name: gameName });
  }
}
