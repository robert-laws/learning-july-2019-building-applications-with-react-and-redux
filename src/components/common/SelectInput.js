import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  inputLabelLeft: {
    marginLeft: 15,
  },
}));

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="authors-simple" className={classes.inputLabelLeft}>Author</InputLabel>
      <Select
        value={value}
        name={name}
        onChange={onChange}
        autoWidth={true}
        variant="outlined"
        input={<OutlinedInput name={name} id="outlined-simple" />}
      >
        <MenuItem value={defaultOption}><em>{defaultOption}</em></MenuItem>
        {options.map(({value, text}) => (
          <MenuItem value={value}>
            {text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
}

export default SelectInput;