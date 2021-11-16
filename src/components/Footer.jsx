import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white" id="contact">
      <div className="footer__social">
        <div className="footer__links">
          <BsFacebook style={{fontSize: 30}}/>
          <a href="https://www.facebook.com/xferchovj" className="footer__links-item">
            Fercho Viveros Jimenez
          </a>
        </div>
        <div className="footer__links">
          <BsInstagram style={{fontSize: 30}}/>
          <a href="https://www.instagram.com/xferchovj" className="footer__links-item">
            @xferchovj
          </a>
        </div>
        <div className="footer__links">
          <AiOutlineGithub style={{fontSize: 30}}/>
          <a href="https://github.com/xFerchoVJ" className="footer__links-item">
            xFerchoVJ
          </a>
        </div>
        <div className="footer__links">
          <BsLinkedin style={{fontSize: 30}}/>
          <a href="https://www.linkedin.com/in/fernando-viveros" className="footer__links-item">
            Fernando Viveros Jimenez
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
