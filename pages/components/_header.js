import React, { useEffect } from 'react';
import Head from 'next/head';

const Header = ({ title }) => {
  useEffect(() => {
    new WOW().init();
  });
  return (
    <Head>
      <title>
        {title == undefined
          ? 'Marzuki | Web Developer'
          : title + ' | uki.my.id'}
      </title>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        rel="stylesheet"
      />
      <script src="/js/wow.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"></script>
    </Head>
  );
};

export default Header;
