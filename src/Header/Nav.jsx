import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import "./Nav.css";

const Nav = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow:false,
    prevArrow:false,
  };
  return (
    <>
  
    <section className="h-[15.4rem] border-b-[0.3px] border-x-white sticky top-0 z-30 bg-white ">
      <Slider
        {...settings}
        className={`bg-[#e84620] text-white text-center flex items-center text-[14px] h-10 ${`slick-prev:none !important`} `}
        
      >
        <h1>Register for a Tiger One wholesale account today</h1>
        <h2>
          Thousands of cannabis seeds available from top breeders including
          Seedsman, FastBuds ,Barns Farm and many more...&nbsp;
        </h2>
        <h3>
          When ordering non-seed products, there may be additional shipping
          costs. Your account manager will be in touch for any additional
          charges.
        </h3>
       
      </Slider>
      <section>
        <ul className="list-none flex items-center justify-center gap-8 text-[14px] font-[Lato] mt-9 cursor-pointer">
          <li>English</li>
          <li>Contact</li>
          <li>Help</li>
          <li>Resources</li>
          <li>Quick Order</li>
          <li>Compare</li>
          <li>
            <a href="https://www.tiger-one.eu/uk-en/customer/account/login" className="font-[700]  py-[8px] px-[18px] border-[#e53d2f] border-2 rounded text-red-500 hover:bg-[#e53d2f] hover:text-white">
              Login
            </a>
          </li>
          <li className="font-[700] py-[8px] px-[18px] border-[#e53d2f] border-2 rounded text-red-500 hover:bg-[#e53d2f] hover:text-white">
          <a href="https://www.tiger-one.eu/uk-en/customer/account/create">Apply For Wholesale Account</a>  
          </li>
        </ul>
      </section>
      <nav className="flex justify-evenly items-center py-6">
        <div>
          <img
            src="https://www.tiger-one.eu/media/logo/websites/1/tigerone-logo.png"
            className="h-[42px] cursor-pointer"
          />
        </div>
        <div className="flex items-center  bg-[#f5f5f5]  h-[2rem] rounded">
          <input
            type="text"
            placeholder="Search entire store...."
            className="outline-none pr-[302px] bg-[#f5f5f5]  pl-[20px] relative"
          />
          <CiSearch className="bg-[#e53d2f] absolute right-[32rem] h-[2rem] text-white w-[1.5rem] rounded-r" />
        </div>
        <div className="flex gap-x-8 ">
          <IoPersonCircleOutline className="text-[2rem] hover:text-[#e53d2f]" />
          <RiGitRepositoryPrivateLine className="text-[2rem] hover:text-[#e53d2f]" />
        </div>
      </nav>
      <section className="flex justify-center gap-8 text-[14px] cursor-pointer ">
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4 ">
          {" "}
          Cannabis Seeds{" "}
        </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4">
          {" "}
          Vaporizers{" "}
        </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4">
          {" "}
          Accessories{" "}
        </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4"> Storage </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4">
          {" "}
          Testing Kits
        </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4">
          {" "}
          Bulk Seeds{" "}
        </h1>
        <h1 className="hover:border-b-4 hover:border-[#e53d2f]  pb-4"> Clothing</h1>
        <span className="hover:border-b-4 hover:border-[#e53d2f]  pb-4">
          Promotions
        </span>
      </section>
    </section>
    </>
  );
};

export default Nav;
