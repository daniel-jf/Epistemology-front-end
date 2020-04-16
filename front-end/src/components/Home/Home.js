import React from 'react';
import '../Home/home.css';

const Landing = () => {
  return (
    <div className="main">
      <div className="header-img">
      <div className="col-md-5 p-lg-5 justify-content-end my-5">
        <h1 className="display-4 font-weight-normal">Epistemology</h1>
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
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light shadow-sm mx-auto" ></div>
      </div>
      <div className="container bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto" ></div>
      </div>
    </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
      <div className="container bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-dark shadow-sm mx-auto"></div>
      </div>
      <div className="container bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light shadow-sm mx-auto"></div>
      </div>
    </div>
    </div>
  )
}
export default Landing;
