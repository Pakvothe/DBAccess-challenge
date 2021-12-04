import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { useAppContext } from '../../context';
import { useCallback, useEffect, useState } from 'react';

export const useStudentManagement = () => {
    const [group, setGroup] = useState([]);
    const { students, loading, setLoading } = useAppContext();
    const { id } = useParams();
    const Student = `${students.find((i) => i.id === +id)?.firstName} ${students.find((i) => i.id === +id)?.lastName}`

    const getStudyGroups = useCallback(() => {
        setLoading(true)
        axios.get(`http://localhost:3001/students/${id}`).then((student) => {
            setGroup(student.data.studyGroups);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.warn(err)
        });
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        getStudyGroups()
        // eslint-disable-next-line
    }, [getStudyGroups]);

    const removeStudentFromCourse = (cohort) => {
        setLoading(true)
        axios
            .delete(`http://localhost:3001/cohort/${cohort.id}/student/${id}`)
            .then((res) => {
                if (res) {
                    setGroup((prev) => prev.filter((c) => c.id !== cohort.id));
                    setLoading(false)
                    toast.success('Student successfully removed from study group')
                }
            }).catch((err) => {
                setLoading(false)
                toast.error('There was an error, please try again')
            });
    };

    return {
        id,
        group,
        loading,
        Student,
        removeStudentFromCourse,
    }
}