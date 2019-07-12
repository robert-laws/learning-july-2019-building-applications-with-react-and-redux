import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if(courses.length === 0) {
      actions.loadCourses().catch(error => {
        console.log(`Loading courses failed: ${error}`)
      })
    }

    if(authors.length === 0) {
      actions.loadAuthors().catch(error => {
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

ManageCoursePage.PropTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  }
}

function mapDispatchToProps() {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);