import React from 'react';
import '../Home/home.css';

const Landing = () => {
  return (
    <div className="main">
      <div className="header-img">
      <div className="col-md-5 p-lg-5 justify-content-end my-5">
        <h3 className="display-4">Epistemology</h3>
        <h5>The study of knowledge</h5>
      </div>
    </div>
<hr />
    <h3 className="mr-md-3 px-3 px-md-5 text-center text-white overflow-hidden">
      ABOUT
    </h3>
<hr />
    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="container bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Are you a visual learner?</h2>
          <hr />
          <p className="lead">You understand information better when it’s presented in a visual way</p>
        </div>
        <div className="bg-light shadow-sm mx-auto" ></div>
      </div>
      <div className="container bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Are you an auditory learner?</h2>
          <hr />
          <p className="lead">You tend to learn better when the subject matter is reinforced by sound</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" ></div>
      </div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="container bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Are you a kinesthetic learner?</h2>
          <hr />
          <p className="lead">You learn through experiencing or doing things.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto"></div>
      </div>
      <div className="container bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Are you a reading/writing learner?</h2>
          <hr />
          <p className="lead">You prefer to learn through written words</p>
        </div>
        <div className="bg-light shadow-sm mx-auto"></div>
      </div>
    </div>
    </div>
  )
}
export default Landing;
