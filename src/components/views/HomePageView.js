import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Footer'
import student1 from "./student1.jpeg"
import student2 from "./student2.jpeg"
import campus1 from "./campus1.jpeg"
import campus2 from "./campus2.jpeg"

import { Link } from 'react-router-dom';

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

const HomePageView = () => {
  const classes = useStyles();
  return (
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

      <br />
      <br />
      <br />

      <h className="homepage_title">Campus and Student Interactive Management Simulator</h>

      <br />
      <br />
      <br />
      <br />

      <section className="homepage_layout">
        <div>

          <p className="homepage_text">
            This RESTful full-stack web app simulates the management of some students and campuses.
            Students and Campuses can be viewed via navigating the different links above on the
            navbar and are seperated. It is possible to view single campuses and students as well
            as all of them. Student and Campus entries can be
            deleted or updated by adding new entries.
            The app will track these and update the entries via a database.
                    </p>

        </div>

        <div className="vert_allign">

          <img className="images" src={student2} alt="student1" />

          &ensp;

                    <img className="images" src={student1} alt="student2" />

          &ensp;

                    <img className="images" src={campus1} alt="campus1" />

          &ensp;

                    <img className="images" src={campus2} alt="campus2" />

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default HomePageView;