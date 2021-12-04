import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';
import { useCourseManagement } from '../../utils/hooks/useCourseManagement'

function CourseDetail() {
    const { instructors, courses } = useAppContext();
    const navigate = useNavigate();
    const { groups, tutor, setTutor, loading, deleteStudyGroup, removeTutor, handleChange, id } = useCourseManagement()
    const actualCourse = courses.find((c) => c.id === +id)?.name;

    if (loading) {
        return (
            <Loading text='Loading...'/>
        );
    }

    return (
        <>
            <Head title={`${actualCourse} | DBAccess`} />
            <PageLayout>
                <Title>
                    <h3>{actualCourse}</h3>
                    <Button color='primary' fill={true} text="Add study group" onClick={() => navigate(`/add/cohort?course=${id}`)} />
                </Title>
                {groups.length > 0 ?
                    <Flex>
                        {groups.map((group) => (
                            <Card key={group.id}>
                                <p><label>Tutor:</label> 	{group.instructor ? (
                                    `${group.instructor.firstName} ${group.instructor.lastName}`
                                ) : tutor === group.id ? (
                                    <select
                                        name='instructorId'
                                        onChange={(e) => handleChange(e, group)}
                                    >
                                        <option value={null} />
                                        {instructors.map((inst) => (
                                            <option
                                                key={inst.id}
                                                value={inst.id}
                                            >{`${inst.firstName} ${inst.lastName}`}</option>
                                        ))}
                                    </select>
                                ) : (
                                    <span style={{ color: '#f72585' }}>Empty tutor</span>
                                )}</p>
                                <p><label>Start date:</label> {group.startDate}</p>
                                <p><label>Start hour:</label> {group.hour} hr</p>
                                <p><label>Duration:</label> {group.duration} hr</p>
                                <div>
                                    {group.instructor ? (
                                        <Button color='primary' fill={false} text="Remove tutor"
                                            onClick={() => removeTutor(group)}
                                        />

                                    ) : (
                                        <Button color='primary' fill={false} text="Assign tutor"
                                            onClick={() =>
                                                setTutor((prev) => (prev ? '' : group.id))
                                            }
                                        />
                                    )}
                                    <Button
                                        color='secondary' fill={false} text=" Delete study group"
                                        onClick={() => deleteStudyGroup(group)}
                                    />
                                </div>
                            </Card>
                        ))}
                    </Flex>
                    : <p>No study group created for this course.</p>
                }
            </PageLayout>
        </>
    );
}

export default CourseDetail;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
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


