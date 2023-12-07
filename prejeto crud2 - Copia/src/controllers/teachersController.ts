import { Request, Response } from 'express';
import { v4 as generateUUID } from 'uuid';

const teachers: any[] = [];

//metodo para criar professor
export const createTeacher = (req: Request, res: Response) => {
  const { cpf, name, phone, salary } = req.body;
  const id = generateUUID();
  const teacher = { id, cpf, name, phone, salary };
  teachers.push(teacher);
  res.status(201).json(teacher);
};

export const getAllTeachers = (req: Request, res: Response) => {
  res.json(teachers);
};

//metodo para deletar um profossor
export const deleteTeacher = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = teachers.findIndex((teacher) => teacher.id === id);

  if (index !== -1) {
    teachers.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Teacher not found' });
  }
};

//metodo para atulizar os dados do professor atraves do ID
export const updateTeacher = (req: Request, res: Response) => {
  const { id } = req.params;
  const { cpf, name, phone, salary } = req.body;
  const index = teachers.findIndex((teacher) => teacher.id === id);

  if (index !== -1) {
    teachers[index] = { id, cpf, name, phone, salary };
    res.json(teachers[index]);
  } else {
    res.status(404).json({ error: 'Teacher not found' });
  }
};

export const getAverageSalary = (req: Request, res: Response) => {
  const totalSalary = teachers.reduce((acc, teacher) => acc + teacher.salary, 0); //soma o salario dos professores
  const averageSalary = totalSalary / teachers.length; // faz a media dos salarios
  res.json({ averageSalary }); // envia um JSON com a media
};
