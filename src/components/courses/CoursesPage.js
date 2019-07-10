import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends Component {
  state = {
    course: {
      title: ''
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value }
    this.setState({
      course
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // step 1 - dispatch action
    this.props.actions.createCourse(this.state.course);
    this.setState({
      course: {
        title: ''
      }
    })
  }

  render() {
    return (
      <>
        <Box m="1rem">
          <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
            Courses
          </Typography>
          <Typography component="h4" variant="h5" align="left" color="textPrimary" gutterBottom>
            Add a course
          </Typography>
        </Box>
        <Box m="1rem">
          <form onSubmit={this.handleSubmit}>
            <TextField
              value={this.state.course.title}
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="course-title"
              label="Course Title"
              name="course-title"
              autoComplete="course-title"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Save Course
            </Button>
          </form>
        </Box>
        <Box m="1rem">
          {this.props.courses.map(({ title }, index) => (
            <div key={index}>
              {title}
            </div>
          ))}
        </Box>
      </>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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