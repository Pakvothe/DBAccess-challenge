import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../context';
import { useNavigate, useLocation } from 'react-router';

export const useCreateGroup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { instructors, courses, loading, setLoading } = useAppContext();
    const [cohort, setCohort] = useState({
        courseId: '',
        startDate: '',
        instructorId: null,
        hour: '',
        duration: ''
    });

    useEffect(() => {
        setLoading(true)
        let courseQuery = new URLSearchParams(location.search).get('course');
        if (courseQuery) {
            let courseToUpdate = courses.find((c) => c.id === +courseQuery);
            setLoading(false)
            setCohort((prev) => ({
                ...prev,
                courseId: courseToUpdate?.id,
            }));
        }
    }, [courses, location, setLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        axios.post('https://dbaccess-challenge.herokuapp.com/cohort', { cohort }).then((res) => {
            setLoading(false)
            toast.success('Study group created successfully')
            navigate(`/courses/${cohort.courseId}`);
        }).catch((err) => {
            setLoading(false)
            toast.error('The tutor has already assigned a course at that time')
        });
    };

    const handleChange = (e) => {
        setCohort((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        cohort,
        instructors,
        handleChange,
        handleSubmit,
        loading
    }
}

export default useCreateGroup
