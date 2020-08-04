import React from 'react';

import './style.css';
function Footer() {
  return (
    <footer>
      <div className="ack">
        <p className="ack-text">
          Made with <span className="heart">&#10084;</span> at{' '}
          <a
            href="https://www.lftechnology.com/"
            className="lf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            lftechnology!!!
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
