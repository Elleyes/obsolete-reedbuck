import React from 'react';

export default class Button extends Component {
  render() {
    const iconType = ' glyphicon ' + this.props.icon
    return(
        <button onClick={this.props.onClick} className={iconType}>
        </button>

    )
  }
}
