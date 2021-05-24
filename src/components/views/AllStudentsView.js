import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif',
    fontSize: '35px',
    color: '#CDDC39'
  },
  appBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: 'none',
  }

}));


const AllStudentsView = (props) => {
  const classes = useStyles();
  if (!props.allStudents.length) {
    return (
      <div>
      <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
          <Link className={classes.links} to={'/'} >CRUD App</Link>
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>All Students View</h1></div>

    <div className="item">There are no Students.</div>;
    <div className="AddButton">
      <Link to={'/students/add'} >
            <Button variant="contained" color="primary" size="lg">
              Add Student
            </Button>
          </Link>
      </div>
    </div>
    </div>
    )
    
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
          
            <Typography variant="h6" className={classes.title} color="inherit" >
            <Link className={classes.links} to={'/'} >CRUD App</Link>
          </Typography>
          
            <Link className={classes.links} to={'/campuses'} >
              <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
                All Campuses
            </Button>
            </Link>

            <Link className={classes.links} to={'/students'} >
              <Button variant="contained" color="primary">
                All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>All Students View</h1></div>
    </div>

    <div className="AddButton">
      <Link to={'/students/add'} >
            <Button variant="contained" color="primary" size="lg">
              Add Student
            </Button>
          </Link>
      </div>
      <div className="studentCols">
      {props.allStudents.map((student) => (
        <div className="item" key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname} {student.lastname}</h1>
          </Link>
          <img src={student.imageUrl} width="450px" alt={student.firstname} />
          <p>GPA: {student.gpa}</p>

          <Link className="editLink" to={`/students/edit/${student.id}`}>
          <Button variant="contained" color="primary">Edit</Button>
          </Link>

          <Button variant="contained" color="primary" onClick={() => props.handleDelete(student.id)}>Delete</Button>
        </div>
      ))}
      </div>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;