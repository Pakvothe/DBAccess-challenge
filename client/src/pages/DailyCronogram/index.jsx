import styled from 'styled-components';
import { Link } from "react-router-dom";
import Head from "../../components/Head";
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';
import { useGetCronogram } from '../../utils/hooks/useGetCronogram';

const DailyCronogram = () => {
    const { dailyCronogram, todayDate, loading } = useGetCronogram()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title={`Daily Cronogram | DBAccess`} />
            <PageLayout>
                <Title>
                    <h3>{todayDate} study groups</h3>
                </Title>
                <Flex>
                    {dailyCronogram.length > 0 ? (
                        dailyCronogram.map((daily) => (
                            <Card key={daily.id}>
                                <b>{daily.course.name}</b>
                                <p><b>Tutor: </b>{daily.instructor ? `${daily.instructor.firstName} ${daily.instructor.lastName}` : <p style={{ color: '#f72585' }}>No tutor is assigned to this course</p>}</p>
                                <p><b>Start Date: </b>{daily.startDate}</p>
                                <p><b>Hour: </b>{daily.hour} hr</p>
                                <p><b>Duration: </b>{daily.duration} {daily.duration === 1 ? 'day' : 'days'}</p>
                                <p><b>Enrolled students: </b>{daily.students.length}</p>

                            </Card>
                        ))
                    ) : <p>There are no study groups assigned for today, you can create a new one from <Link to="/">here</Link>. </p>}
                </Flex>
            </PageLayout>
        </>
    )
}

export default DailyCronogram

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
