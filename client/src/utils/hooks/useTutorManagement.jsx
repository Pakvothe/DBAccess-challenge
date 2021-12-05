import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context';

export const useTutorManagement = () => {
    const [group, setGroup] = useState([]);
    const { instructors, loading, setLoading } = useAppContext();
    const { id } = useParams();
    const Tutor = `${instructors.find((i) => i.id === +id)?.firstName} ${instructors.find((i) => i.id === +id)?.lastName}`

    useEffect(() => {
        setLoading(true)
        axios.get(`https://dbaccess-challenge.herokuapp.com/instructors/${id}`).then((instructor) => {
            setGroup(instructor.data);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            console.warn(err)
        })
    }, [id, setLoading]);

    const removeTutorFromCourse = (cohort) => {
        setLoading(true)
        axios
            .delete(`https://dbaccess-challenge.herokuapp.com/cohort/instructor/${cohort.id}`)
            .then((res) => {
                if (res) {
                    setGroup((prev) => prev.filter((c) => c.id !== cohort.id));
                    setLoading(false);
                    toast.success('Tutor successfully removed from study group')
                }
            }).catch((err) => {
                setLoading(false);
                toast.error('There was an error, please try again')
            });
    };

    return {
        group,
        loading,
        Tutor,
        removeTutorFromCourse
    }
}