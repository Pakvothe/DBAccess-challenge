import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { useStudentManagement } from '../../utils/hooks/useStudentManagement'

const StudentDetail = () => {
    const navigate = useNavigate();
    const { id, group, loading, Student, removeStudentFromCourse } = useStudentManagement()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title={`${Student} | DBAccess`} />
            <PageLayout>
                <Title>
                    <h3>{Student} study groups</h3>
                    <Button text='Register student for a course' color='primary' fill={true} className='mta' onClick={() => navigate(`/students/assign/${id}`)} />
                </Title>
                <Flex>
                    {group.length > 0 ? (
                        group.map((grp) => (
                            <Card key={grp.id}>
                                <b>{grp.course.name}</b>
                                <p><b>Start Date: </b>{grp.startDate}</p>
                                <p><b>Hour: </b>{grp.hour} hr</p>
                                <p><b>Duration: </b>{grp.duration} {grp.duration === 1 ? 'day' : 'days'}</p>
                                <div>
                                    <Button
                                        color='secondary' fill={false} text="Remove student from course" onClick={() => removeStudentFromCourse(grp)}
                                    />
                                </div>
                            </Card>
                        ))
                    ) : <p>The student was not assigned to any course</p>}
                </Flex>
            </PageLayout>
        </>
    );
}

export default StudentDetail;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;

    div {
        display: flex;
        align-items: center;

        b{
            margin-bottom: 8px;
        }

        p{
            b{
                
            }
        }
    }

    @media (max-width: 500px) {
		width: 100%;
	}
`

const Title = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
	margin: 16px 0;

    @media (max-width: 500px) {
		flex-direction: column;
        margin: 8px 0;
        padding: 8px;
	}
`
