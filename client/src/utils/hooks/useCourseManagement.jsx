import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export const useCourseManagement = () => {
    const { id } = useParams();
    const [groups, setGroups] = useState([]);
    const [tutor, setTutor] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://dbaccess-challenge.herokuapp.com/courses/${id}`).then((course) => {
            setGroups(course.data);
            setLoading(false);
        });
    }, [id]);

    const deleteStudyGroup = (cohort) => {
        setLoading(true)
        axios.delete(`https://dbaccess-challenge.herokuapp.com/cohort/${cohort.id}`).then((res) => {
            if (res) {
                setGroups((prev) => prev.filter((c) => c.id !== cohort.id));
                setLoading(false)
                toast.success('Study group successfully removed')
            }
        }).catch((err) => {
            setLoading(false)
            toast.error('There was an error, please try again')
        });
    };

    const removeTutor = (cohort) => {
        setLoading(true)
        axios
            .delete(`https://dbaccess-challenge.herokuapp.com/cohort/instructor/${cohort.id}/`)
            .then((res) => {
                if (res) {
                    setGroups((prev) =>
                        prev.map((c) => (c.id === cohort.id ? res.data : c))
                    );
                    setLoading(false)
                    toast.success('Tutor successfully removed')
                }
            }).catch((err) => {
                setLoading(false)
                toast.error('There was an error, please try again')
            });
    };

    const handleChange = (e, cohort) => {
        setLoading(true)
        axios
            .post(`https://dbaccess-challenge.herokuapp.com/cohort/${cohort.id}/${e.target.value}`)
            .then((res) => {
                if (res) {
                    setTutor('');
                    setGroups((prev) =>
                        prev.map((c) => (c.id === cohort.id ? res.data : c))
                    );
                    setLoading(false)
                    toast.success('Tutor assigned to study group correctly')
                }
            }).catch((err) => {
                setLoading(false)
                toast.error('The tutor already has a study group assigned at that time.')
            });
    };

    return {
        id,
        groups,
        tutor,
        setTutor,
        loading,
        deleteStudyGroup,
        removeTutor,
        handleChange
    }
}