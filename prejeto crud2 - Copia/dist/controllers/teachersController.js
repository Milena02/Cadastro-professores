"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageSalary = exports.updateTeacher = exports.deleteTeacher = exports.getAllTeachers = exports.createTeacher = void 0;
const uuid_1 = require("uuid");
const teachers = [];
//metodo para criar professor
const createTeacher = (req, res) => {
    const { cpf, name, phone, salary } = req.body;
    const id = (0, uuid_1.v4)();
    const teacher = { id, cpf, name, phone, salary };
    teachers.push(teacher);
    res.status(201).json(teacher);
};
exports.createTeacher = createTeacher;
const getAllTeachers = (req, res) => {
    res.json(teachers);
};
exports.getAllTeachers = getAllTeachers;
//metodo para deletar um profossor
const deleteTeacher = (req, res) => {
    const { id } = req.params;
    const index = teachers.findIndex((teacher) => teacher.id === id);
    if (index !== -1) {
        teachers.splice(index, 1);
        res.sendStatus(204);
    }
    else {
        res.status(404).json({ error: 'Teacher not found' });
    }
};
exports.deleteTeacher = deleteTeacher;
//metodo para atulizar os dados do professor atraves do ID
const updateTeacher = (req, res) => {
    const { id } = req.params;
    const { cpf, name, phone, salary } = req.body;
    const index = teachers.findIndex((teacher) => teacher.id === id);
    if (index !== -1) {
        teachers[index] = { id, cpf, name, phone, salary };
        res.json(teachers[index]);
    }
    else {
        res.status(404).json({ error: 'Teacher not found' });
    }
};
exports.updateTeacher = updateTeacher;
const getAverageSalary = (req, res) => {
    const totalSalary = teachers.reduce((acc, teacher) => acc + teacher.salary, 0); //soma o salario dos professores
    const averageSalary = totalSalary / teachers.length; // faz a media dos salarios
    res.json({ averageSalary }); // envia um JSON com a media
};
exports.getAverageSalary = getAverageSalary;
