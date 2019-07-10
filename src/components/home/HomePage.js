import React from 'react';
// import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const HomePage = () => (
  <div>
    <Box m="1rem">
      <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
        Homepage
      </Typography>
    </Box>
    <Box m="1rem">
      <Typography paragraph={true}>Example app using react and redux</Typography>
      <Typography>More coming soon...</Typography>
    </Box>
    {/* <Button component={ Link } to="/about" variant="contained" color="secondary">
      About Page
    </Button> */}
  </div>
)

export default HomePage;