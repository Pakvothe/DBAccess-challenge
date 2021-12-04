const db = require('../db');
const InstructorBuilder = require('./Instructor');
const StudentBuilder = require('./Student')
const CourseBuilder = require('./Course');
const StudyGroupBuilder = require('./StudyGroup');
const StudyGroupStudentBuilder = require('./StudyGroupStudent');

const Instructor = InstructorBuilder(db);
const Student = StudentBuilder(db);
const Course = CourseBuilder(db);
const StudyGroup = StudyGroupBuilder(db);
const StudyGroupStudent = StudyGroupStudentBuilder(db);

StudyGroup.belongsTo(Instructor);
StudyGroup.belongsTo(Course);

Student.belongsToMany(StudyGroup, { through: 'study_group_student' })
StudyGroup.belongsToMany(Student, { through: 'study_group_student' })

module.exports = {
	Instructor,
	Student,
	Course,
	StudyGroup,
	StudyGroupStudent
};
