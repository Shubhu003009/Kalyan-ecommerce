import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer ">
      <div className="max-width">
        <div className=" container">
          <div className="top">
            <div className="item f-links">
              <h1>Categories</h1>
              <ul>
                <li>Ploughs</li>
                <li>Seeders</li>
                <li>Harvestors</li>
              </ul>
            </div>
            <div className="item f-links">
              <h1>Links</h1>
              <ul>
                <li>FAQ</li>
                <li>Pages</li>
                <li>Stores</li>
                <li>Compare</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="item" id="about">
              <h1>About</h1>
              <span>
                <strong>Kalyan agro industries</strong> is founded and operated
                by{' '}
                <em>
                  <b> -Mahendra Sharma.</b>
                </em>
              </span>
              <span>
                We manufacture agricultural equipments as per market needs since
                2015.
              </span>
            </div>
            <div className="item" id="contact">
              <h1>Contact</h1>
              <span>
                <b>founder</b> : Mahendra sharma <br />
                <br />
                <b>call</b> : 9829980351 <br />
                <b>address</b> : Near pal gas godam, Abhishek Nagar, Jodhpur
                RAJ.
              </span>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <span className="logo">Kalyan Agro Industries</span>
              <span className="copyright">
                © Copyrights 2023. All Rights Reserved
              </span>
            </div>
            <div className="right">
              <img src="./images/stripe.svg" alt="stripe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
