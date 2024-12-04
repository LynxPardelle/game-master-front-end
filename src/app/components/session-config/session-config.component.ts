import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-session-config',
  imports: [
    FormsModule,
    ReactiveFormsModule],
  providers: [GameService],
  templateUrl: './session-config.component.html',
  styleUrl: './session-config.component.scss'
})
export class SessionConfigComponent {
  name = '';
  maxPlayers = 4;

  constructor(private gameService: GameService) { }

  createSession(): void {
    this.gameService.createSession(this.name, this.maxPlayers).subscribe(() => {
      alert('Sesión creada exitosamente');
    });
  }

}
