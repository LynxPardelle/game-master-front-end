import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-player-interface',
  imports: [FormsModule],
  providers: [SocketService],
  templateUrl: './player-interface.component.html',
  styleUrl: './player-interface.component.scss'
})
export class PlayerInterfaceComponent implements OnInit {
  playerName = '';
  sessionId: number | null = null;
  isConnected = false;
  currentGameState: any = null;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    // Escuchar actualizaciones del estado del juego
    this.socketService.on(`gameState_${this.sessionId}`, (gameState) => {
      this.currentGameState = gameState;
      console.log('Estado actual del juego:', gameState);
    });
  }

  joinGame(): void {
    if (this.playerName && this.sessionId !== null) {
      this.isConnected = true;
      this.socketService.emit('joinGame', {
        sessionId: this.sessionId,
        name: this.playerName,
      });
    }
  }

  performAction(): void {
    // Lógica para realizar una acción en el turno
    alert('¡Acción realizada!');
    // Puedes enviar una acción al servidor a través del socket
    this.socketService.emit('playerAction', {
      sessionId: this.sessionId,
      playerName: this.playerName,
      action: 'your-action',
    });
  }
}
