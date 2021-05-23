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
    return <div>There are no Students.</div>;
  }

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit" >
              CRUD App
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

        <div className={classes.greeting}><h1>Campus View</h1></div>
      </div>

      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname} {student.lastname}</h1>
          </Link>
          <p>{student.gpa}</p>
        </div>
      ))}

      <footer className={styles.footer}>
        <p>
          <h3>Contributors</h3>
          <p>
            Vladimir Andreev &emsp; &nbsp; &nbsp; <a href="https://github.com/VladimirAndreev09">https://github.com/VladimirAndreev09</a>
          </p>
          <br />
          <p>
            Troy Daniello &emsp; &emsp; &ensp; &ensp; <a href="https://github.com/TDLorenz">https://github.com/TDLorenz</a>
          </p>
          <br />
          <p>
            Sajarin Dider &emsp; &emsp; &ensp; &ensp; <a href="https://github.com/sajarindider">https://github.com/sajarindider</a>
          </p>
          <br />
          <p>
            Valentine Shidlovskiy &nbsp; <a href="https://github.com/Valentine-S">https://github.com/Valentine-S</a>
          </p>
        </p>
      </footer>
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;