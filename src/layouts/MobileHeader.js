import { useState } from "react";
import { useSelector } from "react-redux";

const MobileHeader = () => {
  const data=useSelector((state)=>state.data.data?.user?.about)

  const [toggle, setToggle] = useState(false);
  return (
    <div className="devman_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
            <span style={{fontWeight:600,fontSize:"20px"}}>{data?.name}</span> 
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
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
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li className="download_cv">
              <a href="img/cv/1.jpg" download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileHeader;
