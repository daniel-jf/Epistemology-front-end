import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user);
  }

  render() {
    return(
      
      <div className="login container">
        <div className="mt-5 text-center align-self-center">
          <h2 className="text-center">Login to get learning!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email: 
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Password: 
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default Login;