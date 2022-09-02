import React, { Component } from 'react'
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
      age:"",
      gender:""
    }
  }

  handleInputChange = (e) => {
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

onSubmit = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  const {name,age,gender} = this.state;

  const data = {
    name:name,
    age:age,
    gender:gender
  }

  axios.put(`http://localhost:8080/student/update/${id}`,data).then((res) => {
    if(res.data){
      alert("Student Updated Successfully!");
      this.setState({
        name:"",
        age:"",
        gender:""
      })
    }
  })

}
  
  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8080/student/${id}`).then((res) => {
      if(res.data){
        this.setState({
          name: res.data.user.name,
          age: res.data.user.age,
          gender: res.data.user.gender
        })
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <center><h3><b>Edit Student Details</b></h3></center>
        <form>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">Edit Name</label>
            <input type="text" 
            className="form-control" 
            name="name"
            placeholder="Enter Name"
            value={this.state.name} 
            onChange={this.handleInputChange}/>
          </div>

          <div className="mb-3">
            <label for="exampleInputAge" className="form-label">Edit Age</label>
            <input type="number" 
            className="form-control"
            min="1" 
            name="age"
            placeholder="Enter Age"
            value={this.state.age}
            onChange={this.handleInputChange}/>
          </div>

          <div className="mb-3">
            <label for="exampleInputGender" className="form-label">Edit Gender</label>
            <input type="text" 
            className="form-control"
            name="gender"
            placeholder='Enter Gender'
            value={this.state.gender} 
            onChange={this.handleInputChange}/>
          </div>

            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Update</button>
        </form>
      </div>
    )
  }
}
