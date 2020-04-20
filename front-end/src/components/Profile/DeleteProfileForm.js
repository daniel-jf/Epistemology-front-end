import React from 'react';

function DeleteProfileForm() {
  return(
    <div className="container-fluid">
    	<div className="row justify-content-center">
    		<div className="col-md-6 mt-3 mb-3">
    			<div className="card">
    				<div className="card-header">

              <form className="text-center" role="form">
                <h2 className="mb-2 mt-2">Are you sure you want to delete profile?</h2>

                <button type="submit" className="btn btn-info mt-3">Delete</button>
              </form>

    				</div>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default DeleteProfileForm;