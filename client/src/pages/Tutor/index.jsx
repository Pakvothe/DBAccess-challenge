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

function Tutor() {
    const { instructors, setInstructors, loading, setLoading } = useAppContext();
    const navigate = useNavigate();

    const deleteTutor = (id) => {
        setLoading(true)
        axios
            .delete(`https://dbaccess-challenge.herokuapp.com/instructors/${id}`)
            .then((res) => {
                if (res) {
                    setInstructors((prev) => prev.filter((c) => c.id !== id));
                    setLoading(false)
                    toast.success('Tutor successfully removed')
                }
            }).catch((err) => {
                setLoading(false)
                toast.error('There was an error, please try again')
            });
    }

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title="Tutors | DBAccess" />
            <PageLayout>
                <Title>
                    <h3>Tutors list</h3>
                    <Button text='Add new Tutor' color='primary' fill={true} className='mta' onClick={() => navigate('/add/tutor')} />
                </Title>
                <Flex>
                    {instructors.map((instructor) => (
                        <Card key={instructor.id}>
                            <h4>{instructor.firstName} {instructor.lastName}</h4>
                            <div>
                                <Button
                                    color='primary' fill={false} text="View study groups"
                                    onClick={() => navigate(`/tutors/${instructor.id}`)}
                                />
                                <Button
                                    color='secondary' fill={false} text="Delete tutor"
                                    onClick={() => deleteTutor(instructor.id)}
                                />
                            </div>
                        </Card>
                    ))}
                </Flex>
            </PageLayout>
        </>
    );
}

export default Tutor;

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