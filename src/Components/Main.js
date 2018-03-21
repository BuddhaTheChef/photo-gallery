import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
  render() {
    return <div>
            <Title title = {'TO DOs'}/>
            <List tasks = {['Mow lawn', 'Walk dog']}/>
            <List tasks = {['wash clothes', 'Dry clothes']}/>
          </div>
  }
}

export default Main
