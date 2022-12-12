import React, { Component } from 'react'
import EnComponent from './EnComponent'

class HoverCounter extends Component {
  render() {
    const {count,increment}=this.props
    return (
      <div>
      <h1 onMouseEnter={increment}>Hover Me{count}</h1>
      </div>
    )
  }
}

export default EnComponent(HoverCounter)
