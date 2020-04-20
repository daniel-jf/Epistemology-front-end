import React from 'react';
import Profile from './Profile';
import UserAPI from '../../api/UserAPI';

class UpdateProfileForm extends React.Component {

    state = {
        firstName: '',
        lastName:'',
        username: '',
        email: '',
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState(
            { [type]: event.target.value }
        )
    }
    onSubmit = () => {
        const { firstName, lastName, username, email } = this.state
        const payload = {user: {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email
          }
        }
        console.log(payload)
        // update
    }

    render(){
    return(
    <div className="container-fluid">
    	<div className="row justify-content-center">
    		<div className="col-md-6 mt-3 mb-3">
    			<div className="card">
    				<div className="card-header">
                        <form role="form">
                            <h2 className="mb-2 mt-2">Update Profile</h2>
                            <div className="form-group">
                            <label htmlFor="inputFullName">First Name:</label>
                            <input onChange={(event) => this.handleChange(event, "firstName")}
                                type="text" 
                                maxlength="30" 
                                className="form-control" 
                                id="inputFirstName" 
                                value={this.state.firstName} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputFullName">Last Name:</label>
                            <input onChange={(event) => this.handleChange(event, "lastName")}
                                type="text"
                                maxlength="30" 
                                className="form-control" 
                                id="inputLastName"
                                value={this.state.lastName}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputFullName">Username:</label>
                            <input onChange={(event) => this.handleChange(event, "username")}
                                type="text"
                                maxlength="30" 
                                className="form-control" 
                                id="inputLastName"
                                value={this.state.username}/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="inputCurrentCity">Email:</label>
                            <input onChange={(event) => this.handleChange(event, "email")}
                                type="email"
                                maxlength="30" 
                                className="form-control" 
                                id="email"
                                value={this.state.email}/>
                            </div>
                            <button onClick={this.onSubmit} type="submit" className="btn btn-info">Submit</button>
                            <a className="btn btn-info m-1" href="/deleteprofileform">Delete Account</a>
                        </form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )
}
}
export default UpdateProfileForm;