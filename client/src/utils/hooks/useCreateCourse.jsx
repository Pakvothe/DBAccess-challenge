import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context';

export const useCreateCourse = () => {
    const [course, setCourse] = useState('');
    const { setCourses, loading, setLoading } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios
            .post('http://localhost:3001/courses', { name: course })
            .then((res) => {
                setCourses((prev) => [...prev, res.data]);
                toast.success('Course created successfully')
                setLoading(false)
                navigate('/courses');
            })
            .catch(() => {
                setLoading(false)
                toast.error('There already exists a course with that name')
            });
    };

    return {
        handleSubmit,
        setCourse,
        loading,
        setLoading
    }
}

export default useCreateCourse
