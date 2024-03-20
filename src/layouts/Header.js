import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits";
import { useSelector } from "react-redux";

const Header = () => {
  const data=useSelector((state)=>state.data.data?.user?.about)

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              {/* <img src="img/logo/logo.png" alt="" /> */}
             <span style={{fontWeight:600,fontSize:"20px"}}>{data?.name}</span> 
            </a>
            <a className="dark" href="#">
            <span style={{fontWeight:600,fontSize:"20px"}}>{data?.name}</span> 
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li className="download_cv">
                <a href="img/cv/1.jpg" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
