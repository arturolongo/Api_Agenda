import { NotificationNewAgenda } from "../../infrastructure/serviceRabbitMQ/NotificationNewAgenda";
import { Agenda } from "../../domain/entities/Agenda";

export class NotificationAgendaUseCase{
    constructor(readonly serviceNotification:NotificationNewAgenda){}
    async run(agenda:Agenda){
        await this.serviceNotification.sendNotification(agenda)
    }
}