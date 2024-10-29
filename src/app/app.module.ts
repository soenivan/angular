import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GamesListComponent } from './games-list/games-list.component';
import { AddGameComponent } from './add-game/add-game.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { GameService } from './game.service';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar AppRoutingModule
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GamesListComponent,
    AddGameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  // Asegúrate de añadir AppRoutingModule aquí
  ],
  providers: [AuthService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
