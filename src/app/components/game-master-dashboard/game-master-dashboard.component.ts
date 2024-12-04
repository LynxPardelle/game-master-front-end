import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/game.service';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-game-master-dashboard',
  imports: [RouterLink],
  providers: [GameService, SocketService],
  templateUrl: './game-master-dashboard.component.html',
  styleUrl: './game-master-dashboard.component.scss'
})
export class GameMasterDashboardComponent implements OnInit {
  sessions: any[] = [];
  currentGameState: any = null;

  constructor(private gameService: GameService,
    private socketService: SocketService) { }

  ngOnInit(): void {
    this.loadSessions();

    // Escuchar eventos del WebSocket
    this.socketService.on('gameState_1', (gameState) => {
      this.currentGameState = gameState; // Actualizar estado del juego
    });

    this.socketService.on('gameEnded_1', (data) => {
      alert(data.message); // Mostrar mensaje cuando termine el juego
      this.currentGameState = null;
    });
  }

  loadSessions(): void {
    this.gameService.listSessions().subscribe({
      next: (data) => {
        console.log(data);  
        this.sessions = data;
      },
      error: (err) => {
        console.error('Error al cargar las sesiones:', err);
      },
      complete: () => {
        console.log('Carga de sesiones completada.');
      },
    });
  }

  viewSession(sessionId: number): void {
    // Navegar o mostrar detalles de la sesión
    this.gameService.getSession(sessionId).subscribe((gameState) => {
      this.currentGameState = gameState;
    });
  }

  nextTurn(): void {
    if (this.currentGameState) {
      this.socketService.emit('nextTurn', { sessionId: this.currentGameState.id });
    }
  }

  finalizeGame(): void {
    if (this.currentGameState) {
      this.socketService.emit('finalizeGame', { sessionId: this.currentGameState.id });
    }
  }
}
