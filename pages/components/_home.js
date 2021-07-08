import React from 'react';
import dynamic from 'next/dynamic';
const ReactTypingEffect = dynamic(() => import('react-typing-effect'));

export default function Home() {
  return (
    <div className="home" id="home">
      <h1 className="title montserrat text-white mb-3 text-center   ">
        <ReactTypingEffect
          text={["I'm Marzuki.", "I'm a Web Developer."]}
          speed="50"
          eraseSpeed="50"
          eraseDelay="1000"
          typingDelay="1000"
        />
      </h1>
      <div className="social-icons mb-3">
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </div>
      <a href="#about" className="btn-bouncing bouncing scroll_down">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </a>
    </div>
  );
}
