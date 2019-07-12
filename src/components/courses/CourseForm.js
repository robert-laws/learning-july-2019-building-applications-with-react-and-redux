import React from 'react'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, authors, onSave, onChange, saving = false, errors = {}}) => {
  return (
    <form onSubmit={onSave}>
      <Box m="1rem">
        <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
          {course.id ? 'Edit' : 'Add'} Course
        </Typography>
      </Box>
      <Box m="1rem">
        {errors.onSave && (
          <Typography component="h2" variant="h3" align="left" color="textPrimary" gutterBottom>
            {errors.onSave}
          </Typography>
        )}
      </Box>
      <Box m="1rem">
        <TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title} />
      </Box>
      <Box m="1rem">
        <SelectInput name="authorId" label="Author" value={course.authorId || ''} options={authors.map(author => ({ value: author.id, text: author.name }))} onChange={onChange} error={errors.author} />
      </Box>
      <Box m="1rem">
        <TextInput name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
      </Box>
      <Box m="1rem">
        <Button type="submit" fullWidth variant="contained" color="primary" disabled={saving}>
          {saving ? 'Saving...' : 'Save'}
        </Button>
      </Box>
    </form>
  )

}

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
}

export default CourseForm;