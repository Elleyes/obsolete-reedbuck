import React from 'react';
import Todo from './Todo'

class List extends React.Component{
  render() {
    const {todos,
      handleDeleteClick,
      onTaskChange,
      handleCompleteClick,
      movePriorityUp,
      movePriorityDown} = this.props

    console.log( todos )

    return(
      <tbody>
        { todos.map((todo) =>
          <Todo
            key={todo.id}
            {...todo}
            onTaskChange={ (e) => onTaskChange(e, todo) }
            onDelete={ (e) => handleDeleteClick(e, todo.id) }
            onCompleteToggle={ (e) => handleCompleteClick(e, todo.id) }
            movePriorityUp={ (e) => movePriorityUp(e, todo) }
            movePriorityDown={ (e) => movePriorityDown(e, todo)  }
          />
        )}
      </tbody>
    )
  }
}

export default List
