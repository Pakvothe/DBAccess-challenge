const { DataTypes: D, DataTypes } = require('sequelize');

module.exports = (db) =>
	db.define('studyGroup', {
		startDate: {
			type: D.DATEONLY,
			allowNull: false,
		},
		duration: {
			type: D.INTEGER,
			allowNull: true,
		},
		hour: {
			type: D.STRING,
			allowNull: true,
		},
		courseId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'courses',
				key: 'id',
			},
		},
		instructorId: {
			type: DataTypes.INTEGER,
			references: {
				model: 'instructors',
				key: 'id',
			},
		},
	});
