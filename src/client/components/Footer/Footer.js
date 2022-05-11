import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul className="footer-list">
          <span className="footer-title">
            <li>About us</li>
          </span>
          <li>All meals</li>
          <li>Book-seat</li>
          <li>Add-review</li>
        </ul>
        <ul className="footer-list">
          <span className="footer-title">
            <li>FAQ</li>
          </span>
          <li></li>
          <li>about us</li>
          <li>contact us</li>
        </ul>

        <div className="contact-info">
          <h2>Follow us on social media</h2>
          <div className="footer-Icons">
            <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
            <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
            <img src="https://img.icons8.com/fluency/48/000000/github.png" />
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" />

            <img src="https://img.icons8.com/color/48/000000/pinterest--v1.png" />
          </div>
        </div>
      </div>
      <p className="copyright">
        License free, Made by Vahab Lotfi for education purpose.
      </p>
    </div>
  );
}

export default Footer;
