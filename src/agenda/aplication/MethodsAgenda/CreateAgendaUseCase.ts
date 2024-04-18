
import {json} from 'stream/consumers';
import { Agenda } from '../../domain/entities/Agenda';
import { AgendaRepository } from '../../domain/interface/AgendaRepository';
import { NotificationAgendaUseCase } from '../services/NotificationNewAgenda';
import { ISocketIOInterface } from '../../domain/services/Isocket.io';

export class CreateAgendaUseCase{
    constructor(
        readonly AgendaRepository:AgendaRepository,
        readonly notification: NotificationAgendaUseCase,
        readonly socket:ISocketIOInterface
    ){}
    async run(
        idServicio_Citas:number,
        descripcion:string
    ):Promise<Agenda | null>{
        try {
            const agenda = await this.AgendaRepository.createAgenda(
                idServicio_Citas,
                descripcion
            )
            if(agenda)this.notification.run(agenda)
            this.socket.emit("agenda", agenda);

            return agenda;
        } catch (error) {
            return null;
        }
    }
}