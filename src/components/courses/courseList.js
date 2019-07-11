import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  boldText: {
    fontWeight: 700,
    fontSize: '0.9rem',
  },
}));

const CourseList = ({ courses }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.boldText}>Title</TableCell>
            <TableCell className={classes.boldText}>Author</TableCell>
            <TableCell className={classes.boldText}>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map(({id, title, authorName, slug, category}) => (
            <TableRow key={id}>
              <TableCell >
                <Link to={`/course/${slug}`}>{title}</Link>
              </TableCell>
              <TableCell>{authorName}</TableCell>
              <TableCell>{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
}

export default CourseList;