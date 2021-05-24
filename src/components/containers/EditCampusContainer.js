import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editCampusThunk } from "../../store/thunks";
import { fetchCampusThunk } from "../../store/thunks";
import Button from '@material-ui/core/Button';


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
        this.props.history.push('/campus/'+newCampus.id);
    }

    render(){
        return(
        <div className="item">
            <form onSubmit={this.handleSubmit}>
                <label className="studentLabel" htmlFor="name">Name: </label>
                  <input className="studentInput" type="text" name="name" defaultValue = {this.props.campus.name} placeholder="Campus Name" required />
                <br/>
                <label className="studentLabel" htmlFor="address">Address: </label>
                  <input className="studentInput" type="text" name="address" defaultValue = {this.props.campus.address} placeholder="Campus Address" required />
                <br/>
                <label className="studentLabel" htmlFor="description">Description: </label>
                  <input className="studentInput" type="text" name="description" defaultValue = {this.props.campus.description} placeholder="Campus Description" />
                <br/>
                <label className="studentLabel" htmlFor="imageUrl">Image Url: </label>
                  <input className="studentInput" type="text" name="imageUrl" defaultValue = {this.props.campus.imageUrl} placeholder= "https://via.imageurl.com/" />
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