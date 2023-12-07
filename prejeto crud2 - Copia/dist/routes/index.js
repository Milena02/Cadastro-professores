"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Rotas para a API usando o express
const express_1 = require("express");
const teachersController = __importStar(require("../controllers/teachersController"));
const router = (0, express_1.Router)();
//Rotas para serem usadas pelo controlador e fazer/ executar as instruções do crud
router.post('/teachers', teachersController.createTeacher);
router.get('/teachers', teachersController.getAllTeachers);
router.delete('/teachers/:id', teachersController.deleteTeacher);
router.put('/teachers/:id', teachersController.updateTeacher);
router.get('/avgsalary', teachersController.getAverageSalary);
exports.default = router;
