const { Course, Instructor, StudyGroup } = require('../models');

const getCourses = async (_, res) => {
    res.status(200).json(await Course.findAll());
};

const getCoursesGroups = async (req, res) => {
    const { id } = req.params;
    res.status(200).json(
        await StudyGroup.findAll({
            where: { courseId: id },
            include: [Course, Instructor],
        })
    );
};

const createCourse = async (req, res) => {
    const { name } = req.body;
    try {
        res.status(201).json(await Course.create({ name }));
    } catch (err) {
        res.status(409).json({ error: 'Name is in use' });
    }
};

const deleteCourse = async (req, res) => {
    const { id } = req.params;
    await StudyGroup.destroy({ where: { courseId: id } });
    let deleted = await Course.destroy({
        where: { id },
    });
    res.status(200).json(deleted);
};

module.exports = { getCourses, getCoursesGroups, createCourse, deleteCourse };