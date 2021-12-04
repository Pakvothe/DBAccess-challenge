const server = require('express').Router();
const { getInstructors, getInstructorGroups, createInstructor, deleteInstructor } = require('../controllers/instructors');

server.get('/instructors', getInstructors);
server.get('/instructors/:instructorId', getInstructorGroups);
server.post('/instructors', createInstructor);
server.delete('/instructors/:instructorId', deleteInstructor);

module.exports = server;