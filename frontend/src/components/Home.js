import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      students:[]
    };
  }

  componentDidMount(){
    this.retrivePosts();
  }

  retrivePosts(){
    axios.get("http://localhost:8080/student/").then(res => {
      if(res.data){
        this.setState({
          students:res.data.status
        });

        console.log(this.state.students);
      }
    });
  }

 onDelete = (id) => {
  
  axios.delete(`http://localhost:8080/student/delete/${id}`).then((res) =>{
    alert("Deleted Successfully!");
    this.retrivePosts();
  })
 }

  render() {
    return (
      <div className='container'>
       <center><h3><b>All Students</b></h3></center>
       &nbsp;
        <table className='table'>
          <thead>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>
          </thead>

          <tbody>
            {this.state.students.map((students,index) => (
              <tr>
                <th scope="row">{index+1}</th>
                <td>
                    <a href={`/student/${students._id}`} style={{textDecoration:'none'}}>
                    {students.name}
                    </a>
                </td>
                <td>{students.age}</td>
                <td>{students.gender}</td>
                <td>
                  <a className='btn btn-warning' href={`/edit/${students._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className='btn btn-danger' href='#' onClick={() => this.onDelete(students._id)}>
                    <i className='far fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className='btn btn-success'><a href='/add' style={{textDecoration:'none',color:'white'}}>Create New Student</a></button>
      </div>
    )
  }
}
