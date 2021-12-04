
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Head from "../../components/Head";
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';
import { useTutorManagement } from '../../utils/hooks/useTutorManagement'

const TutorDetail = () => {
    const { group, loading, Tutor, removeTutorFromCourse } = useTutorManagement()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }
    return (
        <>
            <Head title={`${Tutor} | DBAccess`} />
            <PageLayout>
                <Title>
                    <h3>{Tutor} study groups</h3>
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
                                        color='primary' fill={false} text="Remove tutor from course" onClick={() => removeTutorFromCourse(grp)}
                                    />
                                </div>
                            </Card>
                        ))
                    ) : <p>The tutor does not have assigned courses. You can assign it to any available course or create a new one <Link to="/courses">here</Link>. </p>}
                </Flex>
            </PageLayout>
        </>
    );
}

export default TutorDetail;

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
