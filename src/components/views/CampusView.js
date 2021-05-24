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
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));


const CampusView = (props) => {
  const {campus} = props;
  const classes = useStyles();
  const [newStudent, setNewStudent] = useState(null);
  const {allStudents} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }

  const handleStudentChange = (e) => {
    setNewStudent(e.target.value);
  };

  const handleStudentUpdate = (e) => {
    e.preventDefault();
    if (newStudent)
      axios.put(`/api/students/${newStudent}`, { campusId: campus.id })
        .then(() => e.target.submit());
  };

  // const handleStudentCampusDelete = (e) => {
  //   // e.preventDefault();
  //     axios.put(`/api/students/${student.id}`, { campusId: null })
  //     .then(() => e.target.submit());
  // };


  return (
    


    <div>   

    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
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
      
      <div className={classes.greeting}><h1>Campus View</h1></div>
    </div>

    <div className="item">
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <ul>
        <h2>Students: </h2> 
      {campus.students.map( student => {
        return (
          <div className="studentCols">
          <div className="item" key={student.id}>
          <img src={student.imageUrl} width="150px" alt={student.firstname} />
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname} {student.lastname}</h1>
          </Link>
          {/* <Button variant="contained" color="primary" onClick={() => handleStudentCampusDelete(student.id)}>Delete</Button> */}
          <Link className="editLink" to={`/students/edit/${student.id}`}>
          </Link>
          </div>
        </div>
        );
      })}
      </ul>
      <Link className={classes.links} to={'/campuses'} >
        <Button variant="contained" color="primary" onClick={() => props.handleDelete(campus.id)}>Delete</Button>
      </Link>  
      <form onSubmit={handleStudentUpdate}>
      <select
        name="Students"
        onChange={handleStudentChange}
        defaultValue=""
      >
      <option value="" >
        Select Student
      </option>
        
      {allStudents.length &&
      allStudents.map((student) => (
      <option value={student.id} key={student.id}>
      {student.firstname} {student.lastname}
      </option>
      ))}
      </select>
      <input type="submit" value="Enroll Student"></input>
    </form>

    {/* disabled hidden */}

    </div>
    </div>
  );

};

CampusView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default CampusView;