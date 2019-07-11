# Learning - July 2019 - Building Applications with React and Redux

Code along to Pluralsight course - Building Applications with React and Redux

## Steps to Setup and Add Feature to Redux

### Setup

1. create action
1. create reducer
1. create root reducer
1. configure store
1. instantiate store
1. connect component
1. pass props via connect
1. dispatch action

### Add Feature

1. create action
1. enhance reducer
1. connect component
1. dispatch action

```javascript
// EXTRA CODE

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
  this.props.createCourse(this.state.course);
  this.setState({
    course: {
      title: ''
    }
  })
}
```