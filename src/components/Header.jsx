import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-md-flex flex-column justify-content-center">
            <h1 className="text-white animate__animated animate__bounceInLeft">Hi, my name is Fernando Viveros</h1>
            <p className="text-white fs-4 fw-lighter animate__animated animate__bounceInLeft">
              I'm software developer from México!
              Lover of tacos, coffee, good movies and always learning something new!
            </p>
          </div>
          <div className="col-12 col-md-6 ps-md-5">
            <img src="/img/profile.png" alt="Fernando" className="img-fluid header__image bounce-1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
