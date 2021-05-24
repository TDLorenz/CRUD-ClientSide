import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { CampusView } from "../views";
import PropTypes from "prop-types";
import { deleteCampusThunk } from "../../store/thunks";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  handleDelete = (campusId) =>
    {
        this.props.deleteCampus(campusId);
    }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        allStudents={this.props.allStudents}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
    allStudents: state.allStudents,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
CampusContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(CampusContainer);