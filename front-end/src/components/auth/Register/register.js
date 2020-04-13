import React from 'react';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    password2: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.register(newUser);
  }

  render() {
    return(
      <div className="register">
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
          <label>Re-enter Password: 
            <input
              type="password"
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Register;