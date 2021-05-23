import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCampusThunk } from "../../store/thunks";
import Button from '@material-ui/core/Button';


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
        <div className="item">
            <form onSubmit={this.handleSubmit}>
                <label className="studentLabel" htmlFor="name">Name: </label>
                  <input className="studentInput" type="text" name="name" placeholder="Campus Name" required />
                <br/>
                <label className="studentLabel" htmlFor="address">Address: </label>
                  <input className="studentInput" type="text" name="address" placeholder="Campus Address" required />
                <br/>
                <label className="studentLabel" htmlFor="description">Description: </label>
                  <input className="studentInput" type="text" name="description" placeholder="Campus Description" />
                <br/>
                <label className="studentLabel" htmlFor="imageUrl">Image Url: </label>
                  <input className="studentInput" type="text" name="imageUrl" placeholder="https://via.imageurl.com/" />
                <br/>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
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