import { useEffect } from "react";
import { preloader } from "../utilits";
import { useDispatch, useSelector } from "react-redux";
import { portfolioData } from "../components/Redux/Axiose";
import Custom404 from "../../pages/404";

const Preloader = () => {
  const dispatch=useDispatch()
  useEffect(() => {
    preloader();
    dispatch(portfolioData())
  }, []);


  return (
    <div id="preloader">

      <div className="loader_line" />
    </div>
  );
};
export default Preloader;
