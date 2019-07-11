import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if(courses.length === 0) {
      actions.loadCourses().catch(error => {
        console.log(`Loading course failed ${error}`)
      });
    }

    if(authors.length === 0) {
      actions.loadAuthors().catch(error => {
        console.log(`Loading authors failed ${error}`)
      });
    }
  }

  render() {
    return (
      <>
        <Box m="1rem">
          <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
            Courses
          </Typography>
        </Box>
        <CourseList courses={this.props.courses} />
      </>
    )
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  // step 4 - react re-renders
  return {
    courses: state.authors.length === 0 ? [] : state.courses.map(course => {
      return {
        ...course,
        authorName: state.authors.find(author => author.id === course.authorId).name
      }
    }),
    authors: state.authors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);