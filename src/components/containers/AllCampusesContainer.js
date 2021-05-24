import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import { fetchAllStudentsThunk } from "../../store/thunks";
import { addCampusThunk } from "../../store/thunks";
import { deleteCampusThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  handleSubmit = (event) =>
    {
        // Prevent browser refresh
        event.preventDefault();

        const name = event.target.name.value;
        const address = event.target.address.value;
        const description = event.target.description.value;
        const imageUrl = event.target.imageUrl.value;

        let newCampus =
        {
            name: name,
            address: address,
            description: description,
            imageUrl: imageUrl
        };
        this.props.addCampus(newCampus);

        event.target.reset();
    }

    handleDelete = (campusId) =>
    {
        this.props.deleteCampus(campusId);
    }

  render() {
    return (
      <div>
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        allStudents={this.props.allStudents}
        handleDelete={this.handleDelete}
      />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllCampusesContainer);