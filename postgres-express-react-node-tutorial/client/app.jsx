import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Current from '../components/current'
import Archived from '../components/archived'

export default class App extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    const title = <div className="title">I am the title</div>

    return (

      <div className="container">
        {title}
        <Current />
        <Archived />

      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
