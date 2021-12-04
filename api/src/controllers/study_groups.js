const { Instructor, Course, Student, StudyGroup, StudyGroupStudent } = require('../models');

const getStudyGroups = async (_, res) => {
    res.status(200).json(await StudyGroup.findAll());
};

const getDailyStudyGroups = async (req, res) => {
    const { startDate } = req.params;
    res.status(200).json(await StudyGroup.findAll({ where: { startDate: startDate }, include: [Course, Instructor, Student] }));
};

const createStudyGroup = async (req, res) => {
    const { cohort } = req.body;
    const instructorId = cohort.instructorId;
    const courseList = await StudyGroup.findAll({
        where: { instructorId },
        include: [Course, Instructor],
    })

    const pivot = courseList.find(item => item.hour == cohort.hour)
    if (!pivot) {
        let created = await StudyGroup.create({ ...cohort });
        res.status(201).json(created);
    } else {
        res.status(409).json({ error: 'The tutor already has a course at that time' });
    }
};

const addTutorToStudyGroup = async (req, res) => {
    const { id, instructorId } = req.params;

    let studyGroup = await StudyGroup.findByPk(id)
    let foundStudyGroup = await StudyGroup.findOne({ where: { instructorId: instructorId, hour: studyGroup.hour } })
    if (foundStudyGroup) {
        return res.status(409).json('The tutor already has a course at that time')
    }
    let updated = await StudyGroup.update(
        { instructorId },
        { where: { id }, returning: true, include: [Instructor] }
    );
    let added = await StudyGroup.findByPk(id, { include: [Instructor] });
    res.status(201).json(added);
};

const addStudentToStudyGroup = async (req, res) => {
    const { id, studentId } = req.params;

    let student = await Student.findOne({ where: { id: studentId }, include: { model: StudyGroup } });
    let studyGroup = await StudyGroup.findByPk(id);

    let invalid = false;
    student.studyGroups.forEach(group => {
        if (group.hour === studyGroup.hour) {
            invalid = true
        }
    });
    if (invalid) {
        return res.status(409).json('The student already has a course at that time')
    }
    await student.addStudyGroup(id)
    return res.status(201).json(student);
};

const deleteStudyGroup = async (req, res) => {
    const { id } = req.params;

    let deleted = await StudyGroup.destroy({ where: { id } });
    res.status(200).json(deleted);
};

const removeTutorFromStudyGroup = async (req, res) => {
    const { id } = req.params;

    let deleted = await StudyGroup.update(
        { instructorId: null },
        { where: { id }, returning: true }
    );

    res.status(200).json(deleted[1][0]);
};

const removeStudentFromStudyGroup = async (req, res) => {
    const { id, studentId } = req.params;

    let deleted = await StudyGroupStudent.destroy(
        { where: { studentId: studentId, studyGroupId: id } }
    );
    res.status(200).json(deleted);
};

module.exports = {
    getStudyGroups,
    getDailyStudyGroups,
    createStudyGroup,
    addTutorToStudyGroup,
    addStudentToStudyGroup,
    deleteStudyGroup,
    removeTutorFromStudyGroup,
    removeStudentFromStudyGroup
};