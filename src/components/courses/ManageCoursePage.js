import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadCourses } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;

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
  }

  render() {
    return (
      <>
        <Box m="1rem">
          <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
            Manage Courses
          </Typography>
        </Box>
      </>
    )
  }
}

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  }
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);