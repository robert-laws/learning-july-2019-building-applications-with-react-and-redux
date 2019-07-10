import React from 'react';
import Box from '@material-ui/core/Box'; 
import Typography from '@material-ui/core/Typography';

const AboutPage = () => (
  <div>
    <Box m="1rem">
      <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
        About
      </Typography>
    </Box>
    <Box m="1rem">
      <Typography>This app uses React, Redux, and React Router, etc.</Typography>
    </Box>
  </div>
)

export default AboutPage;