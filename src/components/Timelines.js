import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import TimelinePopup from "./popup/TimelinePopup";

const TimelineCards = () => {
  const data = useSelector((state) => state.data.data?.user?.timeline);
  
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const accentColors = ["#41516C", "#FBCA3E", "#E24A68", "#1B5F8C", "#4CADAD"];
  const educationColor = "#FF5733"; 

  const filterData = data?.filter((value) => value.enabled === true);

  return (
    <Fragment>
      <TimelinePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
        {filterData && filterData.length > 0 && ( 
      <div className="timeline-container">
        <div className="devman_tm_main_title" data-text-align="center">
          <span>Timelines</span>
          <h3>Work Timelines</h3>
          <p>
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
          <ul className="timeline">
            {filterData.map((item, index) => (
              <li
                key={index}
                style={{
                  "--accent-color": accentColors[index % accentColors.length],
                  color: item.forEducation ? educationColor : "inherit", 
                }}
                onClick={() => {
                  setActiveData(item);
                  setOpen(true);
                }}
              >
                <div className="date"> {item.forEducation ?  "Education": "Experience"}</div>
                <div className="title">
                  <u>{item.forEducation ?  item.jobTitle: item.jobTitle}</u>
                </div>
                <div className="descr">{item?.summary}</div>
              </li>
            ))}
          </ul>
      </div>
        )}
    </Fragment>
  );
};

export default TimelineCards;
