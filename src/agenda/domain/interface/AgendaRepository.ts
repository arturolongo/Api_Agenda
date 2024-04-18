import { Agenda} from "../entities/Agenda";
export interface AgendaRepository{
    createAgenda(
        idServicio_Citas: number,
        descripcion: string
    ):Promise<Agenda | null>
}   