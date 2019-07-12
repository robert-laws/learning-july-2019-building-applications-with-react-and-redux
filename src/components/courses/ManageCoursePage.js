import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

import CourseForm from './CourseForm';
import { newCourse } from '../common/mockData';

const ManageCoursePage = ({ courses, authors, loadAuthors, loadCourses, ...props }) => {
  const [course, setCourse] = useState({...props.course})
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(courses.length === 0) {
      loadCourses().catch(error => {
        console.log(`Loading courses failed: ${error}`)
      })
    }

    if(authors.length === 0) {
      loadAuthors().catch(error => {
        console.log(`Loading authors failed: ${error}`)
      })
    }
  }, [courses.length, authors.length, loadAuthors, loadCourses])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }))
  }

  return (
    <>
      <Box m="1rem">
        <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} />
      </Box>
    </>
  )
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);