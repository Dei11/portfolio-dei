import React from "react";
import Menu from "./Menu";
import Footer from "../components/Footer";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../components/Contact.css";

import FrontEnd from "../skills/FrontEnd";
import BackEnd from "../skills/BackEnd";
import Languages from "../skills/Languages";
import Tools from "../skills/Tools";

import frontEnd from "../assets/Skills/Front-End.png";
import backEnd from "../assets/Skills/Back-End.png";
import languages from "../assets/Skills/Languages.png";
import tools from "../assets/Skills/Tools.png";

function Contact() {
  return (
    <div className="contact">
      <Menu />
      <div className="socialm">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/dei7bogdan/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <InstagramIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/andrei_b991"
              rel="noreferrer noopener"
              target="_blank"
            >
              <TwitterIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/Dei11"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GitHubIcon style={{ fontSize: 50 }} />
            </a>
          </li>

          <li>
            <a href="mailto: dei7bogdan@gmail.com" rel="noopener">
              <EmailIcon style={{ fontSize: 50 }} />
            </a>
          </li>
        </ul>
      </div>
      {/* md: */}
      <div className="skills">
        <div className="h-100 grid grid-cols-1 md:grid-cols-4 gap-4 content-around items-stretch p-5">
          <div className="border-2">
            <h2 className="text-center">Front-End</h2>
            <FrontEnd image={frontEnd} />
          </div>

          <div className="border-2">
            <h2 className="text-center">Back-End</h2>
            <BackEnd image={backEnd} />
          </div>

          <div className="border-2">
            <h2 className="text-center">Languages</h2>

            <Languages image={languages} />
          </div>

          <div className="border-2">
            <h2 className="text-center">Tools</h2>

            <Tools image={tools} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
