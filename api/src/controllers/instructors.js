const { Instructor, Course, StudyGroup } = require('../models');

const getInstructors = async (_, res) => {
    res.status(200).json(await Instructor.findAll());
};

const getInstructorGroups = async (req, res) => {
    const { instructorId } = req.params;
    res.status(200).json(
        await StudyGroup.findAll({
            where: { instructorId },
            include: [Course, Instructor],
        })
    );
};

const createInstructor = async (req, res) => {
    const { instructor } = req.body;
    try {
        let createdInstructor = await Instructor.create({ ...instructor });
        res.status(201).json(createdInstructor);
    } catch (err) {
        res.status(409).json({ error: 'Email already exists' });
    }
};

const deleteInstructor = async (req, res) => {
    const { instructorId } = req.params;

    await StudyGroup.destroy({ where: { instructorId: instructorId } });
    let deleted = await Instructor.destroy({ where: { id: instructorId } });
    res.status(200).json(deleted);
};

module.exports = { getInstructors, getInstructorGroups, createInstructor, deleteInstructor };
