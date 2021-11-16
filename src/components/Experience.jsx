import React from "react";

const Experience = () => {
  return (
    <section className="section bg-dark text-white" id="experience">
      <div className="section__wrapper container py-5">
        <h2 className="text-center section__wrapper-text">
          Experience as Developer
        </h2>
        <div className="section__wrapper-flex">
          <div className="section__exp pt-5">
            <h3 className="section__exp-header fs-2">
              BrightCoder | Ruby on Rails Web Developer
            </h3>
            <span className="section__exp-muted">MAY 2021 - CURRENT</span>
            <p className="section__exp-text">
              As brightcoder I’ve learned about some good practices as well as
              different tools. I’ve resolved some challenges to learn deeply
              ruby and after creating projects with Ruby on Rails Some tasks
              that I’ve carried out are the following. Implementing
              authentication and authorization, making unit tests and deploying
              web applications.
            </p>
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src="/img/letmehelpyou.png"
                className="card-img-top"
                alt="Let me help you"
              />
              <div className="card-body">
                <h5 className="card-title text-black fw-bold">
                  Let me help you
                </h5>
                <a
                  href="https://let-me-help-you.herokuapp.com/"
                  target="_blank"
                  className="btn btn-outline-primary"
                  rel="noreferrer"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pt-2">Other experiences soon...</h2>
      </div>
    </section>
  );
};

export default Experience;
