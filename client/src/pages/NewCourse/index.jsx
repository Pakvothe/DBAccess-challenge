import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { useCreateCourse } from '../../utils/hooks/useCreateCourse'

const NewCourse = () => {
    const { setCourse, handleSubmit, loading } = useCreateCourse()

    if (loading) {
        return (
            <Loading text='Loading...' />
        );
    }

    return (
        <>
            <Head title="Create new course | DBAccess" />
            <PageLayout>
                <h3 >Create a new Course</h3>
                <Card>
                    <Container>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Course name</label>
                                <input
                                    type='text'
                                    required
                                    onChange={(e) => setCourse(e.target.value)}
                                    name='firstName'
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

export default NewCourse;

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