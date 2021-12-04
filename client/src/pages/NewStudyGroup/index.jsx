import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { useCreateGroup } from '../../utils/hooks/useCreateGroup'

const NewStudyGroup = () => {
    const { cohort, instructors, handleChange, handleSubmit, loading } = useCreateGroup()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title="Create Study group | DBAccess" />
            <PageLayout>
                <h3 >Create new study group</h3>
                <Card>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Start date</label>
                                <input
                                    type='date'
                                    required
                                    onChange={handleChange}
                                    name='startDate'
                                    value={cohort.startDate}
                                />
                            </div>
                            <div>
                                <label>Hour</label>
                                <input
                                    type='time'
                                    required
                                    onChange={handleChange}
                                    name='hour'
                                    value={cohort.time}
                                />
                            </div>
                            <div>
                                <label>Duration</label>
                                <input
                                    type='number'
                                    required
                                    onChange={handleChange}
                                    name='duration'
                                    value={cohort.duration}
                                    placeholder="1 day"
                                    min={1}
                                />
                            </div>
                            <div>
                                <label>Tutor</label>
                                <select name='instructorId' onChange={handleChange}>
                                    <option value={null}></option>
                                    {instructors.map((instructor) => (
                                        <option
                                            key={instructor.id}
                                            value={instructor.id}
                                        >{`${instructor.firstName} ${instructor.lastName}`}</option>
                                    ))}
                                </select>
                            </div>
                            <Button type='submit' text='Create' color='primary' fill={true} />
                        </form>
                    </Container>
                </Card>
            </PageLayout>
        </>
    )
}

export default NewStudyGroup

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

            label {
                font-weight: 500;
                margin-right: 8px;
                width: 30%;
            }
            input {
                height: 30px;
                width: 70%;
                border-radius: 10px;
                border: 1px solid #ccc;
                padding: 0 10px;

                &:focus {
                    outline: 1px solid #999;
                }

            }
            select {
                height: 30px;
                width: 70%;
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
                    width: 40%;
                }
                input {
                    width: 60%;
                }
                select {
                    width: 60%;
                }
            }
            button {
                width: 100%;
            }
        }
	}
`