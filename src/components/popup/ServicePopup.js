import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  console.log(data)
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.image?.url}
            style={{ backgroundImage: `url(${data.image?.url})` }}
          />
        </div>
        <div style={{marginBottom:"10px"}}>
          <h3>{data.name}</h3>
        </div>
        <span style={{fontWeight:"bold" ,fontSize:"18px",color:"#fb503b",marginBottom:"10px"}} >{data.charge}</span>
        <div className="descriptions">
          {data.desc }
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;
