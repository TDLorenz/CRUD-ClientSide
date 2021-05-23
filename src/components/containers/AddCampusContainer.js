import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCampusThunk } from "../../store/thunks";


class AddCampusContainer extends Component {
    
    handleSubmit = (event) =>
    {
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
        this.props.history.push('/campuses');
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                  <input type="text" name="name" placeholder="Campus Name" required />
                <br/>
                <label htmlFor="address">Address: </label>
                  <input type="text" name="address" placeholder="Campus Address" required />
                <br/>
                <label htmlFor="description">Description: </label>
                  <input type="text" name="description" placeholder="Campus Description" />
                <br/>
                <label htmlFor="imageUrl">Image Url: </label>
                  <input type="text" name="imageUrl" placeholder="https://via.imageurl.com/" />
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
      allCampuses: state.allCampuses,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      addCampus: (campus) => dispatch(addCampusThunk(campus)),
    };
  };

  AddCampusContainer.propTypes = {
    addCampus: PropTypes.array.isRequired,
  };

export default connect(mapState, mapDispatch)(AddCampusContainer);