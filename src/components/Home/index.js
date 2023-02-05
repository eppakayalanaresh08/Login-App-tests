import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {statement: false}

  onClickLogin = () => {
    this.setState(preState => ({statement: !preState.statement}))
  }

  render() {
    const {statement} = this.state

    return (
      <div className="login-container">
        <div className="bg-container-login">
          <Message message={statement} />
          {statement ? (
            <Logout logout={this.onClickLogin} />
          ) : (
            <Login login={this.onClickLogin} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
