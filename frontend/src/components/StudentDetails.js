import React, { Component } from 'react'
import axios from 'axios'

export default class StudentDetails extends Component {

  constructor(props){
    super(props);

    this.state={
      student:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8080/student/${id}`).then((res) => {
      if(res.data){
        this.setState({
          student: res.data.user
        })

      }
    })
  }

  render() {

    const {name, age, gender} = this.state.student;
    return (
      <div className='container' style={{marginTop: '20px'}}>
        <center><h3><b>Student Details</b></h3></center>
        <ul class="list-group">
          <li class="list-group-item">{name}</li>
          <li class="list-group-item">{age}</li>
          <li class="list-group-item">{gender}</li>
        </ul>
      </div>
    )
  }
}
