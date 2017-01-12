import React, { Component } from 'react';

export default class Current extends Component {



  render () {

    const addTask =
      <div className="addTask">
        <input class="textbox" type="text" />
      </div>

    return (
      <div className="current">
        Current Tasks
        {addTask}
      </div>

    )
  }
}
