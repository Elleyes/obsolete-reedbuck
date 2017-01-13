import React from 'react';
class Textbox extends React.Component{

  submitAndClear( event ) {
    const task = document.getElementById('newTask').value
    document.getElementById('newTask').value = ''

    this.props.handleAddTodo( event, task )
  }

  render() {
    return (
      <div className="input-group col-lg-6">
        <span className="input-group-btn">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this.submitAndClear.bind(this)}>
          <span className="glyphicon glyphicon-plus"></span>
          </button>
        </span>
        <input id="newTask" type="text" className="form-control" placeholder="Enter task here"></input>
      </div>
    )
  }
}

export default Textbox
