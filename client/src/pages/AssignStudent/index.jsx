import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';
import { useAssignStudent } from '../../utils/hooks/useAssignStudent'

function AssignStudent() {
    const { id, courses, loading, groups, showGroups, getCourseStudyGroups, asignCourse } = useAssignStudent()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title={`Assign Course | DBAccess`} />
            {!showGroups.show ?
                <PageLayout>
                    <Title>
                        <h3>Assign Courses</h3>
                    </Title>
                    <Flex>
                        {courses.map((course) => (
                            <Card key={course.id}>
                                <p><label>Name:</label> {course.name}</p>
                                <Button color='primary' fill={false} text="Select a study group" onClick={() => getCourseStudyGroups(course.id, course.name)} />
                            </Card>
                        ))}
                    </Flex>
                </PageLayout> :
                <PageLayout>
                    <Title>
                        <h3>{showGroups.courseName}</h3>
                    </Title>
                    <Flex>
                        {groups.length && groups.map((group) => (
                            <Card key={group.id}>
                                <p><label>Tutor:</label>{group.instructor ? `${group.instructor.firstName} ${group.instructor.lastName}` : <p style={{ color: '#f72585' }}>No tutor is assigned to this course</p>}</p>
                                <p><label>Start date:</label> {group.startDate}</p>
                                <p><label>Start hour:</label> {group.hour} hr</p>
                                <p><label>Duration:</label> {group.duration} days</p>
                                <Button color='primary' fill={false} text="Asign to this group" onClick={() => asignCourse(group.id, id)} />
                            </Card>
                        ))}
                    </Flex>
                </PageLayout>
            }
        </>
    );
}

export default AssignStudent;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: row;
	justify-content: space-around;

    div {
        p {
            display: flex;
            justify-content: center;
            label {
                font-weight: 500;
                margin-bottom: 8px;
                margin-right: 8px;
            }

            select {
            }
        }
    }
    @media (max-width: 500px) {
		width: 100%;
	}
`