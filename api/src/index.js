const db = require('./db.js');
const app = require('./app.js');
const { Course, Instructor, Student, StudyGroup, StudyGroupStudent} = require('./models');
require('dotenv').config();

const { PORT } = process.env;

const force = true;
const formatYmd = (date) => date.toISOString().slice(0, 10);

db.sync({ force }).then(async () => {
	app.listen(PORT, function () {
		console.log('Server running properly');
	});
	await Course.bulkCreate([
		{
			name: 'Javascript',
		},
		{
			name: 'CSS',
		},
		{
			name: 'Java',
		},
		{
			name: 'PHP',
		},
		{
			name: 'Python',
		},
		{
			name: 'TypeScript',
		},
		{
			name: 'Solidity',
		},
		{
			name: 'Haskell',
		},
	]);
	await Instructor.bulkCreate([
		{ firstName: 'Permelia', lastName: 'Dip', email: 'jp@gmail.com' },
		{ firstName: 'Marie', lastName: 'Lear', email: 'pp@gmail.com' },
		{ firstName: 'Vilma', lastName: 'Ibeta', email: 'ss@gmail.com' },
		{ firstName: 'Ismael', lastName: 'Agosthino', email: 'rr@gmail.com' },
	]);
	await Student.bulkCreate([
		{ firstName: 'Hugo', lastName: 'Hippocrates', email: 'fo@gmail.com' },
		{ firstName: 'Julia', lastName: 'Franchi', email: 'jf@gmail.com' },
		{ firstName: 'Victor', lastName: 'Perez', email: 'vp@gmail.com' },
		{ firstName: 'Roberto', lastName: 'Hernandez', email: 'rh@gmail.com' },
	]);

	StudyGroup.bulkCreate([
		{
			startDate: formatYmd(new Date()),
			duration: 2,
			hour: '12:00',
			instructorId: 1,
			courseId: 1,
		},
		{
			startDate: formatYmd(new Date()),
			duration: 3,
			hour: '10:00',
			instructorId: 3,
			courseId: 3,
		},
		{
			startDate: formatYmd(new Date()),
			duration: 1,
			hour: '17:00',
			instructorId: 2,
			courseId: 2,
		},
		{
			startDate: '2021-02-26',
			duration: 1,
			hour: '08:00',
			instructorId: 4,
			courseId: 4,
		},
	]).catch(console.log);

	StudyGroupStudent.bulkCreate([
		{
			studentId: 1,
			studyGroupId:1,
		},
		{
			studentId: 2,
			studyGroupId:1,
		},
		{
			studentId: 3,
			studyGroupId:1,
		},
		{
			studentId: 4,
			studyGroupId:1,
		},
		
	]).catch(console.log);
});
