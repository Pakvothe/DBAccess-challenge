const server = require('express').Router();
const coursesRouter = require('./courses')
const studentsRouter = require('./students')
const instructorsRouter = require('./instructors')
const studyGroupsRouter = require('./study_groups')

server.get('/', async (_, res) => {
	res.send("Welcome, server connected succesfully!");
});

server.use(coursesRouter)
server.use(studentsRouter)
server.use(instructorsRouter)
server.use(studyGroupsRouter)

module.exports = server;