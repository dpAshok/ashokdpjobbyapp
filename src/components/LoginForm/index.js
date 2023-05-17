import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLogin: false,
    errorMsg: '',
  }

  username = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  onFailureView = errorMsg => {
    this.setState({isLogin: true, errorMsg})
  }

  onSuccessView = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessView(data.jwt_token)
    } else {
      this.onFailureView(data.error_msg)
    }
  }

  render() {
    const {username, password, isLogin, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <form className="formContainer" onSubmit={this.loginSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="website-logo"
          />
          <div className="inputField">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              placeholder="USERNAME"
              id="username"
              value={username}
              onChange={this.username}
            />
          </div>
          <div className="inputField">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="PASSWORD"
              id="password"
              value={password}
              onChange={this.password}
            />
          </div>
          <button type="submit">Login</button>
          {isLogin && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
