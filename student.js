import React, { Component } from 'react'

class Student extends Component {
  render() {
    return (
      <div>Department : {this.props.dept}</div>
    )
  }
}
export default Student;
