import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-4 bg-light">
        <div className="container">
          <h1 className="display-5 fw-bold">
            Welcome to <span className="text-primary">xNote</span>
          </h1>
          <p className="lead text-muted">
            Your private, cloud-based notes — anywhere, anytime, secure.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container py-4">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-lock-fill fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Secure</h4>
            <p className="text-muted">
              Your notes are encrypted and accessible only to you.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-cloud-upload-fill fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Cloud-based</h4>
            <p className="text-muted">
              Access your notes from any device, anywhere.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-lightning-fill fs-1 text-primary mb-3"></i>
            <h4 className="fw-bold">Fast & Simple</h4>
            <p className="text-muted">
              Minimal, distraction-free design with powerful features.
            </p>
          </div>
        </div>
      </section>

      {/* Built With */}
      <section className="bg-light py-3">
        <div className="container text-center">
          <h5 className="fw-bold mb-3">Built With:</h5>
          <p className="text-muted">
            React.js &bull; Node.js &bull; Express.js &bull; MongoDB &bull; Bootstrap
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p className="fst-italic text-muted">
          Made  by <strong>Laiba Younas</strong>
        </p>
      </footer>
    </div>
  );
};

export default About;
