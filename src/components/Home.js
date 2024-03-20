import {  useSelector } from "react-redux";
import Counter from "./Counter";
import { useEffect } from "react";
import { dataImage, imgToSVG } from "../utilits";


const homeData = {
  firstName: "James",
  lastName: "Smith",
  designation: "Web Developer",
  address: "New York",
  img: "img/hero/2.jpg",
  bio: "Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore",
  numberOfProject: 800,
  numberofyear: 12,
};

const Home = () => {
  const data=useSelector((state)=>state.data.data?.user?.about)
  useEffect(() => {

    dataImage();
    imgToSVG();
  }, [data]);
  
  return (
    <div className="devman_tm_section" id="home">
      {data&&(
      <div className="devman_tm_hero">
        <div className="background">
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name">
                  {data?.name}
                </h3>
                <h3 className="job">
                  {data?.title} from {data?.address}
                </h3>
                <p className="text">{data?.quote}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                  <div className=" devman_tm_button simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src="img/hero/2.jpg" alt="" />
                <div className="main" data-img-url= {data?.avatar?.url}/>
               
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data?.exp_year} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data?.some_total} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                  <img src="img/hero/circle.png" alt="" />
                  <div className="main circleimage" data-img-url={data?.avatar?.url} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
export default Home;
