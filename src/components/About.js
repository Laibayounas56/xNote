import React from "react";

const About = () => {
  return (
    <div className="about-page"> 
      {/* Hero Section */}
      <section className="text-center py-3 bg-light hero-section">
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
      <section className="container py-3 features-section">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-lock-fill fs-1 mb-3 feature-icon"></i>
            <h4 className="fw-bold">Secure</h4>
            <p>Your notes are encrypted and accessible only to you.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-cloud-upload-fill fs-1 mb-3 feature-icon"></i>
            <h4 className="fw-bold">Cloud-based</h4>
            <p>Access your notes from any device, anywhere.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-lightning-fill fs-1 mb-3 feature-icon"></i>
            <h4 className="fw-bold">Fast & Simple</h4>
            <p>Minimal, distraction-free design with powerful features.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-1 footer-signature">
        <p className="fst-italic">
          Made by <strong>Laiba Younas</strong>
        </p>
      </footer>
    </div>
  );
};

export default About;
