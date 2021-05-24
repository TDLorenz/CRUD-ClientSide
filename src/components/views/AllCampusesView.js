import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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


const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
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
      
      <div className={classes.greeting}><h1>All Campuses View</h1></div>

    <div className="item">There are no Campuses.</div>;

    <div className="AddButton">
      <Link to={'/campuses/add'} >
            <Button variant="contained" color="primary" size="lg">
              Add Campus
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

        <div className={classes.greeting}><h1>All Campuses View</h1></div>
      </div>

      <div className="AddButton">
        <Link to={'/campuses/add'} >
          <Button variant="contained" color="primary" size="lg">
            Add Campus
            </Button>
        </Link>
      </div>
      <div className="cols">
        {props.allCampuses.map((campus) => (

          <div className="item" key={campus.id}>

            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
            </Link>
            <img src={campus.imageUrl} width="500px" alt={campus.name} />
            <p>{campus.students.length} students</p>

            <Link className="editLink" to={`/campuses/edit/${campus.id}`}>
              <Button variant="contained" color="primary">Edit</Button>
            </Link>

            <Button variant="contained" color="primary" onClick={() => props.handleDelete(campus.id)}>Delete</Button>
            {/* <div className="spacer"></div> */}
          </div>

        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;