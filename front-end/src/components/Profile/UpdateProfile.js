  
import React from 'react';

function UpdateProfileForm() {
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
                  <input type="text" maxlength="30" className="form-control" id="inputFirstName" />
                </div>
                <div className="form-group">
                  <label htmlFor="inputFullName">Last Name:</label>
                  <input type="text" maxlength="30" className="form-control" id="inputLastName" />
                </div>

                <div className="form-group">
                  <label htmlFor="inputCurrentCity">Email:</label>
                  <input type="text" maxlength="50" className="form-control" id="inputCurrentEmail" />
                </div>

                <button type="submit" className="btn btn-info">Submit</button>
                <a className="btn btn-info m-1" href="DeleteProfileForm">Delete</a>
              </form>

    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default UpdateProfileForm;