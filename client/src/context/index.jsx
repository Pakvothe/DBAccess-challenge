import React, { useContext, useEffect, useState, createContext } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

export const ApplicationContext = createContext({});

export const useAppContext = () => useContext(ApplicationContext);

export const AppProvider = ({ children }) => {
	const [courses, setCourses] = useState([]);
	const [instructors, setInstructors] = useState([]);
	const [students, setStudents] = useState([]);
	const [studyGroups, setStudyGroups] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get('https://dbaccess-challenge.herokuapp.com/courses').then((courses) => {
			setCourses(courses.data);
			setLoading(false);
		});
		axios.get('https://dbaccess-challenge.herokuapp.com/instructors').then((instructors) => {
			setInstructors(instructors.data);
			setLoading(false);
		});
		axios.get('https://dbaccess-challenge.herokuapp.com/students').then((students) => {
			setStudents(students.data);
			setLoading(false);
		});
		axios.get('https://dbaccess-challenge.herokuapp.com/cohort').then((groups) => {
			setStudyGroups(groups.data);
			setLoading(false);
		});
	}, []);

	return (
		<ApplicationContext.Provider
			value={{
				courses,
				setCourses,
				instructors,
				setInstructors,
				students,
				setStudents,
				studyGroups,
				setStudyGroups,
				loading,
				setLoading,
			}}
		>
			{children}
		</ApplicationContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node,
};