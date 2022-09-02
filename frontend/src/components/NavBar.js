import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><i className="fa-solid fa-house-chimney"></i></a>
          </div>
        </nav>
    )
  }
}
