import {query} from '../../../database/mysql'
import { Agenda } from '../../domain/entities/Agenda'
import { AgendaRepository } from '../../domain/interface/AgendaRepository'

export class MysqlAgendaRepository implements AgendaRepository{
    async createAgenda(
        idServicio_Citas: number, 
        descripcion: string
        ): Promise<Agenda | null> {

        const sql = 'INSERT INTO AgendaCitas(idServicio_Citas,descripcion) VALUES (?,?)'
        const params:any[]= [idServicio_Citas,descripcion];
        try {
            const [idServicio_Citas,descripcion]: any = params;
            const agenda: Agenda = new Agenda(idServicio_Citas,descripcion);
            const [result] :any = await query(sql, params);
            return agenda;
        } catch (error) {
            return null;
        }
    }
}