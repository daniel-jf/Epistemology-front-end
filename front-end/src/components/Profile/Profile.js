import React from 'react';
import './Profile.css';
import AboutContainer from '../../containers/AboutProfileContainer/AboutContainer';

class Profile extends React.Component {
    render() {
      console.log(this.props.user);
        return (
            <div className="main-profile">
                <div className="container-fluid">
                    <div className="row text-center justify-content-center">
                        <div className="col-md-4">
                          <div id="card" className="card" style={{top: 300 }}>
                            <img id="img" className="img-fluid rounded mx-auto d-block m-3" alt="user-placeholder" src="https://ringwooddental.com.au/wp-content/uploads/2018/05/profile-placeholder-f-e1526434202694.jpg" />
                            <div id="header" style={{top: -100 }} className="card-header">
                                <h2>Name: </h2>
                                <h4>My learning style is: </h4>
                                <h4>Email: </h4>
                                <a className="btn btn-info m-1" href="EditProfileForm">Update</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div id="card" className="card" style={{top: 300 }}>
                            <div className="about" style={{top: -100 }} className="card-header">
                              <AboutContainer
                              />
                            </div>
                            <a className="btn btn-info m-1" href="http://www.educationplanner.org/students/self-assessments/learning-styles-quiz.shtml">Learning Style Quiz</a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;