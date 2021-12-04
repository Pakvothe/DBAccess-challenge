
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from './context';

//Components ==>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";

//Pages ==>
import Page404 from "./pages/Page404";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import NewStudyGroup from "./pages/NewStudyGroup";
import NewCourse from "./pages/NewCourse";
import Tutor from "./pages/Tutor";
import TutorDetail from "./pages/TutorDetail";
import NewTutor from "./pages/NewTutor"
import Students from "./pages/Students";
import NewStudent from "./pages/NewStudent";
import StudentDetail from "./pages/StudentDetail";
import AssignStudent from "./pages/AssignStudent";
import DailyCronogram from "./pages/DailyCronogram";

const App = () => {
	return (
		<AppProvider>
			<BrowserRouter>
				<Navbar />
				<Container>
					<Routes>
						<Route path="*" element={<Page404 />} />
						<Route exact path="/" element={<DailyCronogram />} />
						<Route exact path="/courses" element={<Courses />} />
						<Route exact path='/courses/:id' element={<CourseDetail />} />
						<Route exact path='/add/course' element={<NewCourse />} />
						<Route exact path='/add/cohort' element={<NewStudyGroup />} />
						<Route exact path="/tutors" element={<Tutor />} />
						<Route exact path="/tutors/:id" element={<TutorDetail />} />
						<Route exact path="/add/tutor" element={<NewTutor />} />
						<Route exact path="/students" element={<Students />} />
						<Route exact path="/add/student" element={<NewStudent />} />
						<Route exact path="/students/:id" element={<StudentDetail />} />
						<Route exact path="/students/assign/:id" element={<AssignStudent />} />
					</Routes>
				</Container>
				<Footer />
			</BrowserRouter>
		</AppProvider>

	);
}

export default App;
