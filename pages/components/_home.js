import React from 'react';
import dynamic from 'next/dynamic';
const ReactTypingEffect = dynamic(() => import('react-typing-effect'));

export default function Home() {
  const SOCIALS = [
    {
      facebook: 'https://web.facebook.com/marzukiberg14/',
    },
    {
      instagram: 'https://instagram.com/wak.uki.fs',
    },
    {
      github: 'https://github.com/marzukiberg',
    },
    {
      linkedin: 'https://www.linkedin.com/in/marzuki-marzuki-12960a184/',
    },
  ];
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
        {SOCIALS.map((item) => {
          return Object.entries(item).map((obj) => {
            return (
              <a href={obj[1]} key={obj[0]} target="_blank">
                <i class={`fa fa-${obj[0]}`} aria-hidden="true"></i>
              </a>
            );
          });
        })}
      </div>
      <a href="#about" className="btn-bouncing bouncing scroll_down">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </a>
    </div>
  );
}
