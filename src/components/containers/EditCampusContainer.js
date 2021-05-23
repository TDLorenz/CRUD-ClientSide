import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editCampusThunk } from "../../store/thunks";
import { fetchCampusThunk } from "../../store/thunks";


class EditCampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    // campus = this.props.fetchCampus(this.props.match.params.id);
    // console.log(this.props.match.params.id)
    this.props.fetchCampus(this.props.match.params.id);
  }  


    handleSubmit = (event) =>
    {
        event.preventDefault();

        const name = event.target.name.value;
        const address = event.target.address.value;
        const description = event.target.description.value;
        const imageUrl = event.target.imageUrl.value;

        let newCampus =
        {
            id: this.props.match.params.id,
            name: name,
            address: address,
            description: description,
            imageUrl: imageUrl
        };
        this.props.editCampus(newCampus);

        event.target.reset();
        this.props.history.push('/campuses');
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                  <input type="text" name="name" defaultValue = {this.props.campus.name} placeholder="Campus Name" required />
                <br/>
                <label htmlFor="address">Address: </label>
                  <input type="text" name="address" defaultValue = {this.props.campus.address} placeholder="Campus Address" required />
                <br/>
                <label htmlFor="description">Description: </label>
                  <input type="text" name="description" defaultValue = {this.props.campus.description} placeholder="Campus Description" />
                <br/>
                <label htmlFor="imageUrl">Image Url: </label>
                  <input type="text" name="imageUrl" defaultValue = {this.props.campus.imageUrl} placeholder= "https://via.imageurl.com/" />
                <br/>
                  <button type="submit">Submit</button>
              </form>
        </div>
        );
    }
}



//Map state to props;
const mapState = (state) => {
    return {
      campus: state.campus,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      fetchCampus: (id) => dispatch(fetchCampusThunk(id))
    };
  };

  EditCampusContainer.propTypes = {
    editCampus: PropTypes.array.isRequired,
    fetchCampus: PropTypes.func.isRequired,
  };

export default connect(mapState, mapDispatch)(EditCampusContainer);