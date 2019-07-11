import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './courseList';

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      console.log(`Loading course failed ${error}`)
    })
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
  courses: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  // step 4 - react re-renders
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);