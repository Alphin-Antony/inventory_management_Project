import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer className="mb-0 text-center">
    <div className="d-flex align-items-center justify-content-center pb-5" style={{ backgroundColor: "lightseagreen" }}>
        <div className="col-md-6">
          <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
            <a  href="https://sahibsingh.dev" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">MAFIL IT TEAM</a>
          </p>
          <a className="text-dark fs-4" href="https://github.com/ssahibsingh" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;