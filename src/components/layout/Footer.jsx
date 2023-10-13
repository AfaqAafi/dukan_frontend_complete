import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Burger Dukan</h2>

        <p>We are trying to give you the best taste possible.</p>

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @BurgerDukan</strong>
      </div>

      <aside className="aside">
        <h4>Follow Us</h4>

        <Link to="#">
          <AiFillYoutube />
        </Link>
        <Link to="#">
          <AiFillInstagram />
        </Link>
      </aside>
    </footer>
  );
};

export default Footer;
