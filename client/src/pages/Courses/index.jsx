import axios from 'axios';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import Head from "../../components/Head";
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useAppContext } from '../../context';
import { useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';
import PageLayout from "../../components/PageLayout";
import { Title } from '../../utils/styles/GlobalStyles';

const Courses = () => {
	const { courses, setCourses, loading, setLoading } = useAppContext();
	const navigate = useNavigate();


	const deleteCourse = (id) => {
		setLoading(true)
		axios.delete(`http://localhost:3001/courses/${id}`).then((res) => {
			if (res) {
				setCourses((prev) => prev.filter((c) => c.id !== id))
				setLoading(false)
				toast.success('Course successfully removed')
			};
		}).catch((err) => {
			setLoading(false)
			toast.error('There was an error, please try again')
		});
	};

	if (loading) {
		return (
			<Loading text='Loading...' />
		);
	}

	return (
		<>
			<Head title="Courses | DBAccess" />
			<PageLayout>
				<Title>
					<h3 >Courses list</h3>
					<Button text='Add new course' color='primary' fill={true} className='mta' onClick={() => navigate('/add/course')} />
				</Title>
				<Flex>
					{courses.map((course) => (
						<Card key={course.id}>
							<h4>{course.name}</h4>
							<div>
								<Button
									color='primary' fill={false} text="View study groups"
									onClick={() => navigate(`/courses/${course.id}`)}
								/>
								<Button
									color='secondary' fill={false} text='Delete course'

									onClick={() => deleteCourse(course.id)}
								/>
							</div>
						</Card>
					))}
				</Flex>
			</PageLayout>
		</>
	)
};

export default Courses;

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	
	@media (max-width: 500px) {
		width: 100%;
	}
`