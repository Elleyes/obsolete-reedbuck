import React, { Component } from 'react';

export default class Current extends Component {



  render () {

    const addTaskButton = <button className="addtask">Add New Task</button>

    return (
      <div className="current">
        {addTaskButton}
        current tasks
      </div>

    )
  }
}
