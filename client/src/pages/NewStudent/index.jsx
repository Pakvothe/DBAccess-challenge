import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import React, { useState } from 'react';
import Head from "../../components/Head";
import Card from '../../components/Card';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import { useAppContext } from '../../context';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";

const NewStudent = () => {
    const navigate = useNavigate();
    const { setStudents, loading, setLoading } = useAppContext();
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios
            .post('https://dbaccess-challenge.herokuapp.com/students', { student })
            .then((res) => {
                setStudents((prev) => [...prev, res.data]);
                setLoading(false)
                toast.success('Student added to database successfully')
                navigate('/students');
            })
            .catch(() => {
                setLoading(false)
                toast.error('The mail is already in use')
            });
    };

    const handleChange = (e) => {
        setStudent((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title="Add new Student | DBAccess" />
            <PageLayout>
                <h3 >Add new Student</h3>
                <Card>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Firstname</label>
                                <input
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='firstName'
                                />
                            </div>
                            <div>
                                <label>Lastname</label>
                                <input
                                    type='text'
                                    required
                                    onChange={handleChange}
                                    name='lastName'
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type='email'
                                    required
                                    onChange={handleChange}
                                    name='email'
                                />
                            </div>
                            <Button type='submit' text='Create' color='primary' fill={true} />
                        </form>
                    </Container>
                </Card>
            </PageLayout>
        </>
    );
}

export default NewStudent;

const Container = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        div{
            margin-bottom: 16px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            label {
                font-weight: 500;
                margin-right: 8px;
                width: 100%;
                text-align: center;
                margin-bottom: 16px;
            }
            input {
                height: 30px;
                width: 100%;
                border-radius: 10px;
                border: 1px solid #ccc;
                padding: 0 10px;

                &:focus {
                    outline: 1px solid #999;
                }

            }
        }

        button {
            margin: 0 auto
        }
    }

    @media (max-width: 500px) {
       form{
            div {
                label {
                    width: 100%;
                }
                input {
                    width: 100%;
                }
              
            }
            button {
                width: 100%;
            }
        }
	}
`