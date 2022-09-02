import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'
import Home from './components/Home'
import NavBar from './components/NavBar'
import StudentDetails from './components/StudentDetails'

export default class  extends Component {
  render() {
    return (
      <BrowserRouter>
            <NavBar />
            <div className='container'>
            <Route path='/' exact component={Home} />
            <Route path='/add' component={CreateStudent} />
            <Route path='/edit/:id' component={EditStudent} />
            <Route path='/student/:id' component={StudentDetails} />   
          </div>
      </BrowserRouter>
    )
  }
}
