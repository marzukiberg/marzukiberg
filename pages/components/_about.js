import React from 'react';
import { Button } from 'react-bootstrap';

export default function About() {
  return (
    <div
      className="about poppins container d-flex align-items-center py-5"
      id="about"
    >
      <div className="row">
        <div className="col-md-6">
          <img
            data-src="img/about.png"
            alt="About Me"
            className="img-fluid profile_img w-100 wow slideInLeft mb-3 lazyload"
            data-wow-delay="0.5s"
          />
        </div>
        <div className="col-md-6 wow slideInRight" data-wow-delay="0.5s">
          <h5 className="title montserrat mb-3">About me</h5>
          <p className="desc text-justify">
            Hello, I'am a Web Developer and a College Student at Islamic State
            University of Riau, Pekanbaru, Indonesia. I'am currently working as
            a freelancer with about <b>1 year experience</b> on web app
            development, i have done about 10 project which build using
            frameworks such as <b>Codeignter</b>, <b>Laravel</b>, <b>React</b>,{' '}
            <b>React Native</b>, and <b>NextJS</b>
            ,.
            <br />
            <br />
            I'am always focusing what user needs along developments and so on
            practicing a better code way, serving a better work for user
            experiences, feel free to contact me if you need my services.
          </p>
          <a
            href="#contact"
            className="btn btn-primary px-5 hire_btn rounded-pill"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
