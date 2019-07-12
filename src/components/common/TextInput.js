import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  const classes = useStyles();

  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
      fullWidth
      error={error}
      id="course-title"
      label={label}
      className={classes.textField}
      placeholder={placeholder}
      name={name}
    />
  )
}
    
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
}

export default TextInput;