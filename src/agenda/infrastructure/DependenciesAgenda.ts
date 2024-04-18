import { CreateAgendaUseCase } from "../aplication/MethodsAgenda/CreateAgendaUseCase";
import { CreateAgendaController } from "./controllers/CreateAgendaController";
import { MysqlAgendaRepository } from "./repository/MysqlAgendaRepository";
import { NotificationNewAgenda } from "./serviceRabbitMQ/NotificationNewAgenda";
import { NotificationAgendaUseCase} from '../aplication/services/NotificationNewAgenda';
import { SocketIO } from "./services/socket.io";
const socketIO = new SocketIO();


export const mysqlAgendaRepository =  new MysqlAgendaRepository();
export const servicesNotification = new NotificationNewAgenda();
export const serviceNotificationUseCase = new NotificationAgendaUseCase(
    servicesNotification
)
export const createAgendaUseCase =  new CreateAgendaUseCase(
    mysqlAgendaRepository,serviceNotificationUseCase,socketIO
)
export const createAgendaController = new CreateAgendaController(
    createAgendaUseCase
)