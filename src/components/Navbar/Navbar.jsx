import logo from "../../assets/naxa-logo.png";
import aboutIcon from "../../assets/about-us.svg";
import teamIcon from "../../assets/team.svg";
import workWithUsIcon from "../../assets/work-with-us.png";
import awardsIcon from "../../assets/awards.svg";
import eventsIcon from "../../assets/events.svg";
import mediaIcon from "../../assets/media.svg";
import publicationsIcon from "../../assets/publication.svg";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";

const Navbar = () => {
  // Added dropdown items as data for dynamic use
  const dropdownItems = {
    portfolio: [
      { label: "General", icon: null },
      { label: "International", icon: null },
    ],
    company: [
      { label: "About Us", icon: aboutIcon },
      { label: "Team", icon: teamIcon },
      { label: "Work With Us", icon: workWithUsIcon },
      { label: "Awards", icon: awardsIcon },
    ],
    eventsMedia: [
      { label: "Events", icon: eventsIcon },
      { label: "Media", icon: mediaIcon },
      { label: "Publications", icon: publicationsIcon },
    ],
  };

  return (
    <nav className="hidden lg:flex justify-between items-center py-3 px-16 xl:px-28 text-white bg-transparent relative">
      <div className="flex items-center">
        <img src={logo} alt="Naxa Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 xl:space-x-8 text-black font-medium text-sm xl:text-base px-8 xl:px-12">
        <li className="hover:text-[#05f] cursor-pointer relative group">
          Services
        </li>
        <li className="hover:text-[#05f] cursor-pointer relative group">
          Portfolio
          <MdArrowDropDown className="inline-block h-4 w-4 ml-2 group-hover:hidden" />
          <MdArrowDropUp className="inline-block h-4 w-4 ml-2 hidden group-hover:inline-block" />
          <ul className="absolute top-full left-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
            {dropdownItems.portfolio.map((item) => (
              <li
                key={item.label}
                className="px-4 py-2 hover:bg-[#ffdc1c] cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </li>
        <li className="hover:text-[#05f] cursor-pointer relative group">
          Company
          <MdArrowDropDown className="inline-block h-4 w-4 ml-2 group-hover:hidden" />
          <MdArrowDropUp className="inline-block h-4 w-4 ml-2 hidden group-hover:inline-block" />
          <ul className="absolute top-full left-0 mt-2 w-52 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
            {dropdownItems.company.map((item) => (
              <li
                key={item.label}
                className="flex items-center px-4 py-2 hover:bg-[#ffdc1c] cursor-pointer"
              >
                <img src={item.icon} alt={item.label} className="h-5 w-5 mr-3" />
                {item.label}
              </li>
            ))}
          </ul>
        </li>
        <li className="hover:text-[#05f] cursor-pointer relative group">
          GeoAI
        </li>
        <li className="hover:text-[#05f] cursor-pointer relative group">
          Events & Media
          <MdArrowDropDown className="inline-block h-4 w-4 ml-2 group-hover:hidden" />
          <MdArrowDropUp className="inline-block h-4 w-4 ml-2 hidden group-hover:inline-block" />
          <ul className="absolute top-full left-0 mt-2 w-52 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
            {dropdownItems.eventsMedia.map((item) => (
              <li
                key={item.label}
                className="flex items-center px-4 py-2 hover:bg-[#ffdc1c] cursor-pointer"
              >
                <img src={item.icon} alt={item.label} className="h-5 w-5 mr-3" />
                {item.label}
              </li>
            ))}
          </ul>
        </li>
        <li className="hover:text-[#05f] cursor-pointer">Blogs</li>
      </ul>
      <button className="bg-[#ffdc1c] text-blue-600 text-sm xl:text-base font-semibold py-2 px-6 xl:px-8 hover:bg-orange-400 transition duration-300">
        Let’s Talk
      </button>
    </nav>
  );
};

export default Navbar;
