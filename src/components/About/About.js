import React from "react";
import "./about.css";
import me from './me.jpg'
export default function About() {
  return (
    <>
      <article data-name="article-full-bleed-background">
        <div className="myImage" >
          <img
          alt = 'me' 
          src={me} className = 'br3' data-aos = 'slide-up' />
        </div>
        <div
          className="cf br3"
          data-aos="zoom-in"
          style={{
            background:
           
           `url(${me})`,
           backgroundRepeat: 'no-repeat',
           backgroundPosition: 'center center',
           backgroundAttachment: 'fixed',
            backgroundSize: "cover",
            padding: "0px",
            margin: "2px",
          }}
        >
          <div className="fl pa2-ns bg-white black-70 measure-narrow f3 times">
            <header className="bb b--black-70 pv4">
              <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
                Ankit Pradhan
              </h3>
              <h4 className="f3 fw4 i lh-title mt0">Bhaktapur, Nepal</h4>
            </header>
            <section className="pt5 pb4">
              <p className="times lh-copy measure f4 mt0">
                I am a full stack web developer. I have sound knowledge of HTML,
                CSS, SASS along with JS in Frontend including ReactJS.
                NodeJS(ExpressJS) is my primary server side tool along with
                MongoDB as data base. Aside from these, I also know some of
                PostgreSql, NextJS, I also possess few knowledge in git, ssh and
                aws. I have been certified from Udemy and Broadway InfoSys Nepal
                as a FullStack Developer (MERN and PERN)
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
