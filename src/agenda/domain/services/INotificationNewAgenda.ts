import { Agenda } from "../entities/Agenda";

export interface INotificationNewAgenda {
    sendNotification(agenda:Agenda):Promise<boolean>;
}