import React, {Component} from 'react'
import ReactDom from 'react-dom'

class List extends Component {

  render() {
    const tasks = ['take out the', 'ding bop', 'walking']

    return ( <ol>
      {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
    </ol>)
  }
}

export default List
