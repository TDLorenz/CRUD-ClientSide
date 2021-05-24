import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { StudentView } from "../views";
import PropTypes from "prop-types";
import { deleteStudentThunk } from "../../store/thunks";

class StudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  handleDelete = (studentId) =>
    {
        this.props.deleteStudent(studentId);
    }

  render() {
    return (
      <StudentView 
        student={this.props.student}
        allCampuses={this.props.allCampuses}
        handleDelete={this.handleDelete}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    // fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
  };
};

// Type check props;
StudentContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(StudentContainer);