import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center fixed-bottom">
      <div className="text-center ">
        © {new Date().getFullYear()} Copyright:
        <a href="https://github.com/henry-doan" target="_blank"> Henry Doan</a>
      </div>
    </footer>
  )
}

export default Footer;