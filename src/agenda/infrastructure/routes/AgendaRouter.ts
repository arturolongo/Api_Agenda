import express from 'express';
import { createAgendaController } from '../DependenciesAgenda';
export const AgendaRouter = express.Router()

AgendaRouter.post(
    '/',
    createAgendaController.run.bind(createAgendaController)
)