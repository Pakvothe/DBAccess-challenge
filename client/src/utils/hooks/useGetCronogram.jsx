import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useAppContext } from '../../context';

export const useGetCronogram = () => {
    const { loading, setLoading } = useAppContext();
    const [dailyCronogram, setDailyCronogram] = useState([])
    const formatYmd = (date) => date.toISOString().slice(0, 10);
    const todayDate = formatYmd(new Date());

    useEffect(() => {
        getDailyCronogram()
        // eslint-disable-next-line
    }, [])

    const getDailyCronogram = () => {
        setLoading(true)
        axios.get(`https://dbaccess-challenge.herokuapp.com/cohort/${todayDate}`).then((cohort) => {
            setDailyCronogram(cohort.data)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            toast.error('There are no study groups scheduled for today')
        });
    }

    return {
        dailyCronogram,
        todayDate,
        loading
    }
}