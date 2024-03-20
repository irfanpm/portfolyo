import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";
import {useSelector } from "react-redux";
import { portfolioData } from "./Redux/Axiose";
import { useEffect } from "react";
import { dataImage, imgToSVG } from "../utilits";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);
  const[Details,setDetails]=useState([])
  const data=useSelector((state)=>state.data.data?.user?.projects)
 const filterData=data?.filter((value)=>value.enabled==true)
 useEffect(() => {

  dataImage();
  imgToSVG();
}, [data]);

  return (
    <Fragment>
      <DetailsPopup open={popup} data={Details} close={() => setPopup(false)} />
      {filterData && filterData.length > 0 && ( 

      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                { filterData?.map((item,index)=>(
                <li className="wow fadeInUp" data-wow-duration="1s" key={index}>
                  <div className="list_inner">
                    <div
                      className="background_image"
                      data-img-url={item?.image?.url}
                    />
                    <div className="content">
                      <div className="details">
                        <span className="category">
                          <a href="#">Youtube</a>
                        </span>
                        <h3 className="title">
                          <a href="#">
                           {item?.title}
                            
                          </a>
                        </h3>
                        <span className="view_project">
                          <a href="#">
                            View Project <i className="icon-right-big" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() =>{
                        setDetails(item)

                        setPopup(true)
                      }
                      }

                    />
                  </div>
                </li>
                ))
}
              
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}
    </Fragment>
  );
};
export default Portfolio;
