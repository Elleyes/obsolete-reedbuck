import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import Current from '../components/current'
// import Archived from '../components/archived'
import List from '../components/List'
import Textbox from '../components/Textbox'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Tasks : []
    }
    // this.handleCompleteClick = this.handleCompleteClick.bind(this)
    // this.handleDeleteClick = this.handleDeleteClick.bind(this)
    // this.onTaskChange = this.onTaskChange.bind(this)
    // this.movePriorityUp = this.movePriorityUp.bind(this)
    // this.movePriorityDown = this.movePriorityDown.bind(this)
  }

  componentDidMount() {
    this.getAllTodos()
  }

  // initial fetch to retrive stored Todos from DB.
  getAllTodos() {
    fetch('http://localhost:8000/api/todos',{
      method: 'get',
    })
    .then(response => response.json())
    .then(results => {
      this.setState({
        Tasks: results
      })
    })
  }

  // - - - API comunication methods - - -
  handleCompleteClick(e, todoId) {
    fetch(`http://localhost:8000/api/todos/complete/${todoId}`,{
      method: 'put'
    })
    .then(() => this.getAllTodos())
  }

  handleDeleteClick(e, todoId) {
    fetch(`http://localhost:8000/api/todos/${todoId}`,{
      method: 'delete',
    })
    .then(() => this.getAllTodos())
  }

  handleAddTodo(e, title) {
     const taskObj = { title }

     fetch('http://localhost:8000/api/todos',{
       method: 'post',
       body: JSON.stringify(taskObj),
       headers: new Headers({
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       })
     })
     .then(() => this.getAllTodos())
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
          <Textbox handleAddTodo={this.handleAddTodo.bind(this)} />
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
