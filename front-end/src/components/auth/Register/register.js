import React from 'react';

class Register extends React.Component {
  state = {
    firstName: '',
    lastName:'',
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    this.props.register(newUser);
    console.log(newUser);
  }

  render() {
    return(
      <div className="register">
        <form onSubmit={this.handleSubmit}>
        <label>First Name: 
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}>
            </input>
          </label>
          <br />
          <label>Last Name: 
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
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
    )
  }
}

export default Register;