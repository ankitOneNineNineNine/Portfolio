import React from "react";
import './navbar.css'
import signature from "./signature.png";
export default function Navbar(props) {
  var currentPath = window.location.pathname;
  var aboutStyle, projectStyle, academicStyle, contactStyle;
  if (currentPath === "/Portfolio/projects") {
    projectStyle = { backgroundColor: "#D3D3D3" };
  } else if (currentPath === "/Portfolio/academics") {
    academicStyle = { backgroundColor: "#D3D3D3" };
  } else if (currentPath === "/Portfolio/contact") {
    contactStyle = { backgroundColor: "#D3D3D3" };
  } else {
    aboutStyle = { backgroundColor: "#D3D3D3" };
  }
  return (
    <nav className="pa3 pa4-ns ">
      <a
        className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="/Portfolio"
      >
        <img src={signature} alt="my signature" />
      </a>
      <div className="tc pb3 navbar" >
        <a
          className="link dim f6 pa3 br3 f5-ns pointer dib mr3"
          style={aboutStyle}
          href="/Portfolio"
          title="About"
        >
          About
        </a>
        <a
          className="link dim f6 br3  pa3   f5-ns pointer dib mr3"
          style={projectStyle}
          href="/Portfolio/projects"
          title="Projects"
        >
          Projects
        </a>
        <a
          className="link dim f6 br3  pa3   f5-ns pointer dib mr3"
          style={academicStyle}
          href="/Portfolio/academics"
          title="Academics"
        >
          Academic
        </a>
        <a
          className="link dim f6 br3  pa3   f5-ns pointer dib"
          style={contactStyle}
          href="/Portfolio/contact"
          title="Contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
