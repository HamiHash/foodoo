import classes from "./Testimonials.module.css";
import pic1 from "../../assets/gallary/gallery-1.jpg";
import pic2 from "../../assets/gallary/gallery-2.jpg";
import pic3 from "../../assets/gallary/gallery-3.jpg";
import pic4 from "../../assets/gallary/gallery-4.jpg";
import pic5 from "../../assets/gallary/gallery-5.jpg";
import pic6 from "../../assets/gallary/gallery-6.jpg";
import pic7 from "../../assets/gallary/gallery-7.jpg";
import pic8 from "../../assets/gallary/gallery-8.jpg";
import pic9 from "../../assets/gallary/gallery-9.jpg";
import pic10 from "../../assets/gallary/gallery-10.jpg";
import pic11 from "../../assets/gallary/gallery-11.jpg";
import pic12 from "../../assets/gallary/gallery-12.jpg";
import pic13 from "../../assets/gallary/gallery-13.jpg";
import pic14 from "../../assets/gallary/gallery-14.jpg";
import pic15 from "../../assets/gallary/gallery-15.jpg";

const Gallary = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.slideTrack}>
        <div className={classes.slide}>
          <img src={pic1} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic2} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic3} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic4} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic5} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic1} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic2} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic3} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic4} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic5} alt="meal"></img>
        </div>
      </div>
      <div className={classes.slideTrack}>
        <div className={classes.slide}>
          <img src={pic6} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic7} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic8} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic9} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic10} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic6} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic7} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic8} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic9} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic10} alt="meal"></img>
        </div>
      </div>
      <div className={classes.slideTrack}>
        <div className={classes.slide}>
          <img src={pic11} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic12} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic13} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic14} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic15} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic11} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic12} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic13} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic14} alt="meal"></img>
        </div>
        <div className={classes.slide}>
          <img src={pic15} alt="meal"></img>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
