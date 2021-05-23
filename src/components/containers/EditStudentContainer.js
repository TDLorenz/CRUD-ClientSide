import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editStudentThunk } from "../../store/thunks";
import { fetchStudentThunk } from "../../store/thunks";


class EditStudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }  


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
            id: this.props.match.params.id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            gpa: gpa,
            imageUrl: imageUrl
        };
        this.props.editStudent(newStudent);

        event.target.reset();
        this.props.history.push('/students');
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="firstname">FirstName: </label>
                  <input type="text" name="firstname" defaultValue = {this.props.student.firstname} placeholder="First Name" required />
                <br/>
                <label htmlFor="lastname">LastName: </label>
                  <input type="text" name="lastname" defaultValue = {this.props.student.lastname} placeholder="Last Name" required />
                <br/>
                <label htmlFor="email">Email: </label>
                  <input type="text" name="email" defaultValue = {this.props.student.email} placeholder="Email" />
                <br/>
                <label htmlFor="gpa">GPA: </label>
                  <input type="text" name="gpa" defaultValue = {this.props.student.gpa} placeholder="GPA" />
                <br/>
                <label htmlFor="imageUrl">Image Url: </label>
                  <input type="text" name="imageUrl" defaultValue = {this.props.student.imageUrl} placeholder="https://via.imageurl.com/" />
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
      student: state.student,
    };
  };
  
  // Map dispatch to props;
  const mapDispatch = (dispatch) => {
    return {
      editStudent: (student) => dispatch(editStudentThunk(student)),
      fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    };
  };

  EditStudentContainer.propTypes = {
    editStudent: PropTypes.array.isRequired,
  };

export default connect(mapState, mapDispatch)(EditStudentContainer);