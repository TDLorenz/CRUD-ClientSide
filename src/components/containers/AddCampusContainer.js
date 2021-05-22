import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addCampusThunk } from "../../store/thunks";
import axios from 'axios';

class AddCampusContainer extends Component {
    //componentDidMount() {
     // console.log(this.props);

     constructor(props){
        super(props);

      this.state = {
        name: '',
        imageUrl: '',
        address: '',
        description: ''
      }

      this.handleCampusNameInput = this.handleCampusNameInput.bind(this);
      this.handleImgUrlInput = this.handleImgUrlInput.bind(this);
      this.handleAdressInput = this.handleAdressInput.bind(this);
      this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCampusNameInput = (e) => {
        this.setState({name: e.target.value});
      }
    
    handleImgUrlInput = (e) => {
        this.setState({imageUrl: e.target.value});
    }
    
    handleAdressInput = (e) => {
        this.setState({address: e.target.value});
    }
    
    handleDescriptionInput = (e) => {
        this.setState({description: e.target.value});
    }
    
    // handleSubmit = (event) =>
    // {
    //     // Prevent browser refresh
    //     event.preventDefault();

    //     const name = event.target.name.value;
    //     const address = event.target.address.value;
    //     const description = event.target.description.value;
    //     const imageUrl = event.target.imageUrl.value;

    //     let newCampus =
    //     {
    //         name: name,
    //         address: address,
    //         description: description,
    //         imageUrl: imageUrl
    //     };
    //     this.props.addCampus(newCampus);

    //     event.target.reset();
    // }

    handleSubmit = (event) => {
        console.log('test log1')
        console.log(this.state.name)


        axios.post('http://localhost:5000/api/campuses/',{
          'name': this.state.name,
          'imageUrl': this.state.imageUrl,
          'address': this.state.address,
          'description': this.state.description,
        }).then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err);
        });
        window.location.replace('/campuses');





      }






    render(){
        return(

        




        <div>
            {/* <div className="App-header">
            <div style={{flexDirection: 'row', margin: '1%'}}>
                <Link to='/'>
                <button className="ui button">
                    Home
                </button>
                </Link>
                <Link to='/campuslisting'>
                <button className="ui button">
                    Campuses
                </button>
                </Link>
                <Link to='/studentlisting'>
                <button className="ui button">
                    Students
                </button>
                </Link>
            </div> */}
            <form className="ui large form" style={{width: '30%'}}>
                <div className="ui stacked segment">
                <h1 style={{color: 'black'}}> Add New Campus </h1>
                <div className="field">
                    <input
                        type="text"
                        name="name"
                        placeholder="Campus Name"
                        onChange={this.handleCampusNameInput}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        onChange={this.handleImgUrlInput}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        onChange={this.handleAdressInput}
                    />
                </div>
                <div className="field">
                    <input
                        type="text"
                        name="description"
                        placeholder="Campus Description"
                        onChange={this.handleDescriptionInput}
                    />
                </div>
                <button onClick={() => this.handleSubmit, console.log('test log2')}>Submit</button>
                </div>
            </form>
        </div>
        );
    }
}



// Map state to props;
// const mapState = (state) => {
//     return {
//       allCampuses: state.allCampuses,
//     };
//   };
  
//   // Map dispatch to props;
//   const mapDispatch = (dispatch) => {
//     return {
//       addCampus: (campus) => dispatch(addCampusThunk(campus)),
//     };
//   };

//   AddCampusContainer.propTypes = {
//     addCampus: PropTypes.array.isRequired,
//   };

export default AddCampusContainer;