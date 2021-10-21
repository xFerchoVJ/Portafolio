import React from "react";

const Services = () => {
  return (
    <main className="container py-5 services__main">
      <h1 className="text-center text__header">Services</h1>
      <div className="services">
        <div className="services__front py-4">
          <div className="card services__front-img p-2" style={{ width: "18rem" }}>
            <img className="card-img-top" src="/img/undraw_nuxt_js_0fq9.svg" alt="Card frontend" />
            <div className="card-body">
              <h5 className="card-title">Frontend</h5>
              <p className="card-text">
                As a software developer I have skills for the frontend,
                mastering and learning technologies such as
                HTML5, CSS3, Vanilla Javascript and React libraries
              </p>
            </div>
          </div>
        </div>
        <div className="services__back py-4">
          <div className="card p-2 services__back-card" style={{ width: "17rem" }}>
            <img className="card-img-top services__back-img" src="/img/undraw_server_cluster_jwwq.svg" alt="Card backend" />
            <div className="card-body">
              <h5 className="card-title">Backend</h5>
              <p className="card-text services__back-text">
                As a software developer I have skills for the backend,
                mastering and learning technologies such as Node and Ruby,
                as well as knowing how to deploy applications or web pages in tools such as Heroku. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
