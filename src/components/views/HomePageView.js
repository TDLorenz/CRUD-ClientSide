import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../styles/index.css'

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
    backgroundColor: white,
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

      <div className={classes.greeting}><h1>Campus and Student Interactive Management Simulation</h1></div>
      <section className={styles.layout}>
        <h1>Welcome To The Home Page!</h1>
        <br />
        <br />
        <br />
        <p>
          This RESTful full-stack web app simualtes the management of some students and campuses. Students and Campuses
          can be viewed via navigating the differnt links above on the navbar and are seperated. It is possible to view
          single campuses and students as well as all of them. Student and Campus entries can be deleted or updated by adding new entries.
          The app will track these and update the entries via a database.
        </p>
      </section>
    </div>
  );
}




export default HomePageView;
