import React from "react";
import Menu from "./Menu";
import Footer from "../components/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../components/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <Menu />

      <div className="socialm">
        <ul>
          <li>
            <a href="https://www.instagram.com/dei7bogdan/" rel="opener">
              <InstagramIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/andrei_b991" rel="opener">
              <TwitterIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a href="https://github.com/Dei11" rel="opener">
              <GitHubIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a href="mailto: dei7bogdan@gmail.com" rel="opener">
              <EmailIcon style={{ fontSize: 50 }} />
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
