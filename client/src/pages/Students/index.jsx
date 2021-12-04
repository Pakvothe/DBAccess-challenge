import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import { useAppContext } from '../../context';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';

function Students() {
    const { students, setStudents, loading, setLoading } = useAppContext();
    const navigate = useNavigate();

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    const deleteStudent = (id) => {
        setLoading(true)
        axios
            .delete(`http://localhost:3001/students/${id}`)
            .then((res) => {
                if (res) {
                    setStudents((prev) => prev.filter((c) => c.id !== id));
                    setLoading(false)
                    toast.success('Student successfully removed')
                }
            }).catch((err) => {
                setLoading(false)
                toast.error('There was an error, please try again')
            });
    }

    return (
        <>
            <Head title="Students | DBAccess" />
            <PageLayout>
                <Title>
                    <h3>Students list</h3>
                    <Button text='Add new Student' color='primary' fill={true} className='mta' onClick={() => navigate('/add/student')} />
                </Title>
                <Flex>
                    {students.map((student) => (
                        <Card key={student.id}>
                            <h4>{student.firstName} {student.lastName}</h4>
                            <div>
                                <Button
                                    color='primary' fill={false} text="View study groups"
                                    onClick={() => navigate(`/students/${student.id}`)}
                                />
                                <Button
                                    color='secondary' fill={false} text="Delete student"
                                    onClick={() => deleteStudent(student.id)}
                                />
                            </div>
                        </Card>
                    ))}
                </Flex>
            </PageLayout>
        </>
    );
}

export default Students;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;

    div {
        display: flex;
        align-items: center;
    }

    @media (max-width: 500px) {
		width: 100%;
	}
`