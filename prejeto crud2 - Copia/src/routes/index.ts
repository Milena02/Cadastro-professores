//Rotas para a API usando o express
import { Router } from 'express';
import * as teachersController from '../controllers/teachersController';

const router = Router();

//Rotas para serem usadas pelo controlador e fazer/ executar as instruções do crud
router.post('/teachers', teachersController.createTeacher);
router.get('/teachers', teachersController.getAllTeachers);
router.delete('/teachers/:id', teachersController.deleteTeacher);
router.put('/teachers/:id', teachersController.updateTeacher);
router.get('/avgsalary', teachersController.getAverageSalary);

export default router;
