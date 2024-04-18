import { Request,Response } from "express";
import { CreateAgendaUseCase } from "../../aplication/MethodsAgenda/CreateAgendaUseCase";


export class CreateAgendaController{
    constructor(readonly createAgendaUseCase:CreateAgendaUseCase){}
    async run (req: Request, res:Response):Promise <void>{
        const data = req.body;
        try {
            const agenda = await this.createAgendaUseCase.run(
                data.idServicio_Citas,
                data.descripcion
            )
            if(agenda)
            res.status(201).send({
                status:"succes",
                data:{
                    idServicio_Citas: agenda.idServicio_Citas,
                    descripcion: agenda.descripcion
                }
         })
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"Ocurrio un error",
                mesagges:error
            })
        }
    }
}