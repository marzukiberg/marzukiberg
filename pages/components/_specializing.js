import React from 'react';

export default function Specializing() {
  return (
    <div className='specializing' id='specializing'>
      <div
        className='text-center mx-auto wow bounceInUp'
        data-wow-delay='0.5s'
        style={{ maxWidth: 540 }}
      >
        <i
          class='fa fa-desktop'
          aria-hidden='true'
          style={{ fontSize: 100, width: 100 }}
        ></i>
        <h4 className='montserrat'>Web Developer</h4>
        <p className='poppins'>
          I'am specializing in frontend Web Developer and mostly using frontend
          technologies such as React, Bootstrap, and SASS.
        </p>
      </div>
    </div>
  );
}
