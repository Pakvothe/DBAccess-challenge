const { Student, Course, StudyGroup } = require('../models');

const getStudents = async (_, res) => {
    res.status(200).json(await Student.findAll());
};

const getStudentInfo = async (req, res) => {
    const { studentId } = req.params;
    let student = await Student.findOne({ where: { id: studentId }, include: { model: StudyGroup, include: [Course] } });

    res.status(200).json(student);
};

const createStudent = async (req, res) => {
    const { student } = req.body;
    try {
        let createdStudent = await Student.create({ ...student });
        res.status(201).json(createdStudent);
    } catch (err) {
        res.status(409).json({ error: 'Email already exists' });
    }
};

const deleteStudent = async (req, res) => {
    const { studentId } = req.params;

    let deleted = await Student.destroy({ where: { id: studentId } });
    res.status(200).json(deleted);
};

module.exports = { getStudents, getStudentInfo, createStudent, deleteStudent };