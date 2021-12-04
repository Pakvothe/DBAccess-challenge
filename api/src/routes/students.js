const server = require('express').Router();
const { getStudents, getStudentInfo, createStudent, deleteStudent } = require('../controllers/students');

server.get('/students', getStudents);
server.get('/students/:studentId', getStudentInfo);
server.post('/students', createStudent);
server.delete('/students/:studentId', deleteStudent);

module.exports = server;