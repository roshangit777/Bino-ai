import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = ({ setCurrent, menu, setMenu }) => {
  return (
    <div className="md:p-5 pt-2 w-full justify-around gap-20 items-center h-[60px] flex shadow-2xs">
      <div className="flex items-center gap-3" onClick={() => setCurrent(0)}>
        <img src="/logo.png" className="w-fit h-8 2xl:w-fit 2xl:h-10" alt="" />
        <img src="/log2.png" className="w-fit h-8 2xl:w-fit 2xl:h-10" alt="" />
      </div>
      <div
        className="border-3 border-[#f5f5f5] rounded-xl h-fit py-2"
        onClick={() => setMenu(menu ? false : true)}
      >
        <GiHamburgerMenu className="w-10 h-6 2xl:w-12 2xl:h-7" />
      </div>

      <div
        className={`absolute w-[220px] h-[300px] bg-white rounded-2xl z-[500] shadow-2xl 
      transition-all duration-150 ease-in-out right-7 md:right-60 2xl:right-150
      ${menu ? "top-25 opacity-100" : "top-[-500px] opacity-0"}`}
      >
        <div className="flex flex-col gap-12 p-4">
          <div
            className="flex items-center justify-between h-10"
            style={{ boxShadow: "0px 2px 0px -1px rgba(0,0,0,0.1)" }}
          >
            <h1 className="font-bold text-2xl">Menu</h1>
            <RxCross1 className="w-5 h-5" onClick={() => setMenu(false)} />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 p-1 pl-5 2xl:pb-0">
            <a
              href="https://bino.bot/bino-business"
              className="text-md 2xl:text-xl"
            >
              For Business
            </a>
            <a href="https://bino.bot/blog" className="text-md 2xl:text-xl">
              Blogs
            </a>
          </div>
          <div className="flex flex-col items-start gap-2 border-t-2 border-gray-200 pt-2">
            <span className="font-bold text-gray-500 text-sm">FOLLOW US</span>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=100083924344406"
                className="hover:text-[#6a5bff]"
              >
                <FaFacebook className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/boni1/"
                className="hover:text-[#6a5bff]"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/bino_app/"
                className="hover:text-[#6a5bff]"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
