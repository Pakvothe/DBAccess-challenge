import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context';

export const useAssignStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { courses, loading, setLoading } = useAppContext();
    const [groups, setGroups] = useState([]);
    const [showGroups, setShowGroups] = useState({
        courseId: '',
        courseName: '',
        show: false
    })

    const getCourseStudyGroups = (id, name) => {
        setLoading(true)
        axios.get(`http://localhost:3001/courses/${id}`).then((course) => {
            setGroups(course.data);
            if (course.data.length) {
                setShowGroups({ courseId: id, courseName: name, show: true, })
                setLoading(false);

            } else {
                setShowGroups({ show: false })
                setLoading(false);

                toast.error(`There are no study groups available for ${name} course`)
            }
        });
    }

    const asignCourse = (groupId, studentId) => {
        setLoading(true)
        axios
            .post(`http://localhost:3001/cohort/student/${groupId}/${studentId}`)
            .then((res) => {
                if (res) {
                    setLoading(false);
                    toast.success('Student successfully assigned to study group')
                    navigate(`/students/${studentId}`)
                }
            }).catch((err) => {
                setLoading(false);
                toast.error("The student already has another course scheduled at that time")
            })

        setLoading(false);
    };

    return {
        id,
        courses,
        loading,
        groups,
        showGroups,
        getCourseStudyGroups,
        asignCourse
    }
}