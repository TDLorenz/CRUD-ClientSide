import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useState } from "react";
import PropTypes from "prop-types";


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





const StudentView = (props) => {
    const {student} = props;
    const classes = useStyles();
    const [newCampus, setNewCampus] = useState(null);
    const {allCampuses} = props;
    //waiting for students array to be populated
    // if (campus.students === undefined){
    //   return <div>Loading...</div>
    // }

    const handleCampusChange = (e) => {
      setNewCampus(e.target.value);
    };

    const handleCampusUpdate = (e) => {
      e.preventDefault();
      if (newCampus)
        axios.put(`/api/students/${student.id}`, { campusId: newCampus })
        .then(() => e.target.submit());
    };

    


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
      <div className={classes.greeting}><h1>Student View</h1></div>
    </div>
        <div className="item">
          <h1>{student.firstname} {student.lastname}</h1>
          <img src={student.imageUrl} width="600px" alt={student.firstname} />
          <p>GPA: {student.gpa}</p>
          <p>{student.email}</p>

          <p>{student && student.campus ? student.campus.name : null}</p>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary" onClick={() => props.handleDelete(student.id)}>Delete</Button>
          </Link>

          <form onSubmit={handleCampusUpdate}>
            <select
              name="Campuses"
              onChange={handleCampusChange}
              defaultValue=""
            >
              <option value="" disabled hidden>
                Select Campus
              </option>
              
              {allCampuses.length &&
              allCampuses.map((campus) => (
              <option value={campus.id} key={campus.id}>
              {campus.name}
              </option>
              ))}
            </select>
            <input type="submit" value="Update Campus"></input>
          </form>
        </div>
      </div>
    );
  
  };

  StudentView.propTypes = {
    student: PropTypes.array.isRequired,
    allCampuses: PropTypes.array.isRequired,
  };
  
  export default StudentView;
