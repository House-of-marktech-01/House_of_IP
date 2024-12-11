import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fadeIn animate bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Text */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <div className="fs-logo">
              <a href="https://www.houseofmarktech.com" aria-label="HOUSE OF IP">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhQJ-44yDYIuo8Hj-L1ezQSKAkkK4CqlecQ&s"
                  width="290"
                  height="37"
                  alt="Law Firm Sites Logo"
                  className="mb-2"
                />
              </a>
              <p className="text-sm w-2/3 mt-4">
                At <strong>HOUSE OF IP</strong>, we are dedicated to helping
                you get more cases through stunning website design and SEO.
              </p>
            </div>

            {/* Review Section */}
            <div className="fs-review mt-4">
              <a
                href="https://www.google.com/search?hl=en-PH&amp;gl=ph&amp;q=Law+Firm+Sites,+765+E+340+S+Ste+105,+American+Fork,+UT+84003,+United+States&amp;ludocid=3188276109709459778&amp;lsig=AB86z5WRd94i7QEEfFjtGr5z7_5P#lrd=0x874d8158e589528f:0x2c3f083ac518c142,1"
                target="_blank"
                className="flex items-center"
              >
                <div className="flex flex-col mt-4">
                  <div className="desc text-sm font-semibold mb-2">
                    Happy With Your Service? Leave us a review on Google
                  </div>
                  <div>
                    <img
                      src="https://lawfirmsites.com/wp-content/themes/lfs2022/images/icon-googlereview.png"
                      width="103"
                      height="51"
                      alt="Google Review Icon"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fs-quick mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav aria-label="Footer Menu">
              <ul className="menu space-y-2">
                <li>
                  <NavLink
                    to="/about"
                    className="hover:text-gray-400"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to="/service"
                    className="hover:text-gray-400"
                  >
                    Sevice
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to="/practice"
                    className="hover:text-gray-400"
                  >
                    Practice Areas
                  </NavLink>
                </li>
                <li>
                <NavLink
                    to="/contact"
                    className="hover:text-gray-400"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="fs-contact mb-6 md:mb-0">
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="h4 font-medium">Sales Support – Toll Free</div>
            <p>
              <a href="tel:8009328242" className="hover:text-gray-400">
                (800) 932-8242
              </a>
            </p>
            <div className="h4 font-medium mt-4">Local</div>
            <p>801-770-7089</p>
          </div>

          {/* Social Links */}
          <div className="fs-social mb-6 md:mb-0 flex flex-col space-y-4">
            <a
              href="https://www.facebook.com/Law-Firm-Sites-456889295533/"
              className="text-white hover:text-gray-400"
            >
              <span className="fab fa-facebook-f"></span>
            </a>
            <a
              href="https://twitter.com/Law_Firm_Sites"
              className="text-white hover:text-gray-400"
            >
              <span className="fab fa-twitter"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/law-firm-sites"
              className="text-white hover:text-gray-400"
            >
              <span className="fab fa-linkedin-in"></span>
            </a>
            <a
              href="https://www.pinterest.com/lawfirmsites/"
              className="text-white hover:text-gray-400"
            >
              <span className="fab fa-pinterest-p"></span>
            </a>
            <a
              href="https://www.instagram.com/law_firm_sites/"
              className="text-white hover:text-gray-400"
            >
              <span className="fab fa-instagram"></span>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="fs-copy mt-8 text-center text-sm">
          <p>
            © 2001-2024 House of Ip, Inc. All rights reserved. |{" "}
            <a
              href="https://lawfirmsites.com/privacy-policy"
              className="hover:text-gray-400"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
