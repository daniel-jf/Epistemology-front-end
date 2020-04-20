import React from 'react';

class Register extends React.Component {
  state = {
    userame: '',
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
    let newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.props.register(newUser);
    console.log(newUser);
  }

  render() {
    return(
      <div className="register">
        <div className="text-center">
        <form onSubmit={this.handleSubmit}>
          <label>Username: 
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
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

export default Register;