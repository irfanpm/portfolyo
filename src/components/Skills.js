import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";
import { useDispatch, useSelector } from "react-redux";
import { portfolioData } from "./Redux/Axiose";
import Custom404 from "../../pages/404";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  const data = useSelector((state) => state.data.data?.user?.skills);
  const filterData = data?.filter((value) => value.enabled == true);


  return (
    <div className="devman_tm_section">
      {filterData && filterData.length > 0 && (
        <div className="devman_tm_skills">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>My Skills</span>
              <h3>I Develop Skills Regularly</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="skills_wrapper">
              <div className="left">
                <div className="dodo_progress">
                  {filterData
                    ?.slice(0, Math.ceil(data.length / 2))
                    .map((item, index) => (
                      <div
                      key={index}
                        className="skillsInner___ progress_inner"
                        data-value={item?.percentage}
                        data-color="#142eb5"
                      >
                        <span>
                          <span
                            style={{
                              display: "flex",
                              gap: "6px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item?.image?.url}
                              width={40}
                              height={40}
                            />
                            <span className="label">{item?.name}</span>
                          </span>
                          <span className="number">{item?.percentage}%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="right">
                <div className="dodo_progress">
                  {filterData
                    .slice(Math.ceil(data.length / 2))
                    .map((item, index) => (
                      <div
                      key={index}
                        className="skillsInner___ progress_inner"
                        data-value={item?.percentage}
                        data-color="#142eb5"
                      >
                        <span>
                          <span
                            style={{
                              display: "flex",
                              gap: "6px",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item?.image?.url}
                              width={40}
                              height={40}
                            />
                            <span className="label">{item?.name}</span>
                          </span>{" "}
                          <span className="number">{item?.percentage}%</span>
                        </span>
                        <div className="background">
                          <div className="bar">
                            <div className="bar_in" />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Skills;
