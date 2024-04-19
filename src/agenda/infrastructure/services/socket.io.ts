import socketClient from 'socket.io-client'
import { ISocketIOInterface } from '../../domain/services/Isocket.io'

export class SocketIO implements ISocketIOInterface {
  private socket: any

  constructor() {
    this.socket = socketClient('https://ws-6g3l.onrender.com')
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data)
  }
}
