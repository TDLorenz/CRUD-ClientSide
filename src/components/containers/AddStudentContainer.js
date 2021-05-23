import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStudentThunk } from "../../store/thunks";


class AddStudentContainer extends Component {
    
    handleSubmit = (event) =>
    {
        event.preventDefault();

        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const email = event.target.email.value;
        const gpa = event.target.gpa.value;
        const imageUrl = event.target.imageUrl.value;

        let newStudent =
        {
            firstname: firstname,
            lastname: lastname,
            email: email,
            gpa: gpa,
            imageUrl: imageUrl
        };
        this.props.addStudent(newStudent);

        event.target.reset();
        this.props.history.push('/students');
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstname">FirstName: </label>
                  <input type="text" name="firstname" placeholder="First Name" required />
                <br/>
                <label htmlFor="lastname">LastName: </label>
                  <input type="text" name="lastname" placeholder="Last Name" required />
                <br/>
                <label htmlFor="email">Email: </label>
                  <input type="text" name="email" placeholder="Email" />
                <br/>
                <label htmlFor="gpa">GPA: </label>
                  <input type="text" name="gpa" placeholder="GPA" />
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
      allStudents: state.allStudents,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      addStudent: (student) => dispatch(addStudentThunk(student)),
    };
  };

  AddStudentContainer.propTypes = {
    addStudent: PropTypes.array.isRequired,
  };

export default connect(mapState, mapDispatch)(AddStudentContainer);