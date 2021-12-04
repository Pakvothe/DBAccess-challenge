const server = require('express').Router();
const {
    getStudyGroups,
    getDailyStudyGroups,
    createStudyGroup,
    addTutorToStudyGroup,
    addStudentToStudyGroup,
    deleteStudyGroup,
    removeTutorFromStudyGroup,
    removeStudentFromStudyGroup
} = require('../controllers/study_groups');

server.get('/cohort', getStudyGroups);
server.get('/cohort/:startDate', getDailyStudyGroups);
server.post('/cohort/', createStudyGroup);
server.post('/cohort/:id/:instructorId', addTutorToStudyGroup);
server.post('/cohort/student/:id/:studentId', addStudentToStudyGroup);
server.delete('/cohort/:id', deleteStudyGroup);
server.delete('/cohort/instructor/:id', removeTutorFromStudyGroup);
server.delete('/cohort/:id/student/:studentId/', removeStudentFromStudyGroup);

module.exports = server;