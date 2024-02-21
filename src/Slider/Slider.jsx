import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    rtl:true,
  
  };
  return (
    <>
      <style>{`
          .slick-dots li button:before {
            color: red; 
            font-size: 10px; 
          }
         
          .slick-dots li.slick-active button:before {
            color: red; 
            font-size:18px;
          }
          
      `}</style>
      <Slider {...settings} className="w-[95%] mx-12 mb-8 mt-2">
        <img
          src="https://www.tiger-one.eu/media/wysiwyg/t1_480x528px_survey_MOBILE_1.jpg"
          className="h-[30rem]"
        />
        <img
          src="https://www.tiger-one.eu/media/wysiwyg/BulkSeedT1_480.jpg"
          className="h-[30rem]"
        />
        <img
          src="https://www.tiger-one.eu/media/wysiwyg/T1_1920x566px_THTC.jpg"
          className="h-[30rem]"
        />
        <img
          src="https://www.tiger-one.eu/media/wysiwyg/T1_600x800px_email_ENGLISH_1__1.gif"
          className="h-[30rem]"
        />
        <img
          src="https://www.tiger-one.eu/media/wysiwyg/TG1_Mobile_Artboard_3.jpg"
          className="h-[30rem]"
        />
      </Slider>
    </>
  );
};
export default Sliders;
