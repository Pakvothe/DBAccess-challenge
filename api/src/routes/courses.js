const server = require('express').Router();
const { getCourses, getCoursesGroups, createCourse, deleteCourse } = require('../controllers/courses');

server.get('/courses', getCourses);
server.get('/courses/:id', getCoursesGroups);
server.post('/courses', createCourse);
server.delete('/courses/:id', deleteCourse);

module.exports = server;