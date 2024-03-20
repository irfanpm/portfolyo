import Popup from "./Popup";
const DetailsPopup = ({ open,data, close }) => {
  console.log(data)
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data?.image?.url}
            style={{ backgroundImage: `url(${data?.image?.url})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data.title}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when {`you're`} trying to figure out your user flows
              or the proper visual hierarchy - and the production phase when
              they phase when they will represent the target product. Building
              mockups strikes the ideal balance ease of modification.

              
            </p>
            <ul>{
              data?.techStack?.map((item,i)=>(

                <li key={index}>{item}</li>
              ))
              }
            </ul>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Detail</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>April 22, 2022</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/1.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/2.jpg" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/3.jpg" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;