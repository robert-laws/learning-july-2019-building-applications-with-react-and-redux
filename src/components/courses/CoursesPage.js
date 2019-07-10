import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class CoursesPage extends Component {
  render() {
    return (
      <Box m="1rem">
        <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
          Courses
        </Typography>
      </Box>
    )
  }
}

export default CoursesPage;