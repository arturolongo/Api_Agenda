import amqplib from 'amqplib'
import { INotificationNewAgenda } from '../../domain/services/INotificationNewAgenda'
import { Agenda } from '../../domain/entities/Agenda'
import { buffer } from 'stream/consumers';


export class NotificationNewAgenda implements INotificationNewAgenda{
    private options: any;
    private url: any;
    private exch: any;
    private server: any;
    constructor() {
        this.options = {
          protocol:'amqp',
          username: 'zoe',
          password:'zoe10208',
          port: 5672,
            
        };
        this.url = 'amqp://admin:zoe10208@34.198.106.93';
        this.exch = 'up.practica.pendiente';
      
      }
      async  sendNotification(agenda: Agenda): Promise<boolean> {
          try {
          const conn = await amqplib.connect(this.url);
          const ch =await conn.createChannel();
          
          const status = ch.publish(this.exch,"", Buffer.from(JSON.stringify(agenda)))
         
          return status;
          } catch (error) {
            return false;
          }

      }
}