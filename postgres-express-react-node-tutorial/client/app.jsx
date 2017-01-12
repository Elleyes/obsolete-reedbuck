import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Current from '../components/current'
import Archived from '../components/archived'
//import './style.css'
import List from '../components/List'
import Textbox from '../components/Textbox'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Tasks : []
    }
    this.getAllTodos()
    this.handleCompleteClick = this.handleCompleteClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
    this.onTaskChange = this.onTaskChange.bind(this)
    this.movePriorityUp = this.movePriorityUp.bind(this)
    this.movePriorityDown = this.movePriorityDown.bind(this)
  }



  render() {
    const title = <div className="title">Task List</div>

    return (
      <div className='App'>
        <div className='tasksContainer'>
          <table className='table'>
            <thead>
              <tr>
                <td></td>
                <td className='header'>Tasks</td>
                <td></td>
              </tr>
            </thead>
            <List
            onTaskChange={this.onTaskChange}
            handleDeleteClick={this.handleDeleteClick}
            handleCompleteClick={this.handleCompleteClick}
            movePriorityUp={this.movePriorityUp}
            movePriorityDown={this.movePriorityDown}
            todos={this.state.Tasks}/>
          </table>
          <Textbox handleAddTodo={this.handleAddTodo} />
        </div>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

// <div className="container">
//   {title}
//   <Current />
//   <Archived />
//
// </div>
