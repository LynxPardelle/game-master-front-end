import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  emit(event: string, data: any): void {
    this.socket.emit(event, data);
  }

  on(event: string, callback: (data: any) => void): void {
    this.socket.on(event, callback);
  }

  disconnect(): void {
    this.socket.disconnect(); // Desconectar el socket
  }
}
