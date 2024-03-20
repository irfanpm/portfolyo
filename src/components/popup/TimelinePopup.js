import React from 'react'
import Popup from "./Popup";

const TimelinePopup = ({ data, open, close }) => {
  const startDate = data?.startDate?.toString().split("T")[0];
  const endDate= data?.endDate?.toString().split("T")[0];
  const duration = `${startDate} - ${endDate}`;

  return (
    <Popup open={open} close={close}>
    <div className="news_popup_informations">
    <div className="devman_tm_main_title" data-text-align="center">
          <span>{data?.icon?.url?<img width={50} height={50} style={{borderRadius:"50%"}} src={data?.icon?.url} />:null} {data.company_name}</span>
          <h3>{data.jobTitle}</h3>
           <h6>{duration}</h6>
          <h5>{data.jobLocation}</h5>
       
        </div>
      <div className="details">
        <p style={{textAlign:"center"}}>
           {data.summary}
          </p>
        <div />
      </div>
      <div className="text">
      <ul>
          {data?.bulletPoints?.map((item,index)=>(
              <li key={index}>{item}</li>
              ))}
              </ul>   
      </div>
    </div>
  </Popup>

  )
}

export default TimelinePopup
