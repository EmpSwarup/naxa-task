import { useState } from "react";
import logo from "../../assets/naxa-logo.png";
import aboutIcon from "../../assets/about-us.svg";
import teamIcon from "../../assets/team.svg";
import workWithUsIcon from "../../assets/work-with-us.png";
import awardsIcon from "../../assets/awards.svg";
import eventsIcon from "../../assets/events.svg";
import mediaIcon from "../../assets/media.svg";
import publicationsIcon from "../../assets/publication.svg";
import { MdArrowDropDown, MdArrowDropUp, MdMenu, MdClose } from "react-icons/md";

const MobileNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const handleDropdownClick = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="flex justify-between items-center py-3 px-6 bg-transparent relative">
      <div>
        <img src={logo} alt="Naxa Logo" className="h-10" />
      </div>
      <button className="bg-[#ffdc1c] text-blue-600 font-semibold py-2 px-6 hover:bg-orange-400 transition duration-300 hidden lg:block">
        Let’s Talk
      </button>
      <div className="lg:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <MdMenu className="text-3xl text-black" />
        </button>
      </div>

      {/* Sidebar to open hamburger menu */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-3/5 bg-gradient-to-b from-[#ffab00] to-[#ffdc1c] shadow-lg z-50">
          <div className="flex justify-between items-center px-6 py-4">
            <button onClick={() => setSidebarOpen(false)}>
              <MdClose className="text-3xl text-black" />
            </button>
          </div>

          <ul className="flex flex-col space-y-4 mt-6 px-6 text-black font-medium text-lg">
            <li>Services</li>
            <li>
              <div onClick={() => handleDropdownClick("portfolio")} className="flex justify-between items-center cursor-pointer">
                Portfolio
                {openDropdown === "portfolio" ? (
                  <MdArrowDropUp className="text-xl" />
                ) : (
                  <MdArrowDropDown className="text-xl" />
                )}
              </div>
              {openDropdown === "portfolio" && (
                <ul className="ml-4 mt-2 space-y-2">
                  {dropdownItems.portfolio.map((item) => (
                    <li key={item.label} className="hover:text-blue-600">
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => handleDropdownClick("company")} className="flex justify-between items-center cursor-pointer">
                Company
                {openDropdown === "company" ? (
                  <MdArrowDropUp className="text-xl" />
                ) : (
                  <MdArrowDropDown className="text-xl" />
                )}
              </div>
              {openDropdown === "company" && (
                <ul className="ml-4 mt-2 space-y-2">
                  {dropdownItems.company.map((item) => (
                    <li key={item.label} className="flex items-center space-x-2 hover:text-blue-600">
                      <img src={item.icon} alt={item.label} className="h-5 w-5" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => handleDropdownClick("eventsMedia")} className="flex justify-between items-center cursor-pointer">
                Events & Media
                {openDropdown === "eventsMedia" ? (
                  <MdArrowDropUp className="text-xl" />
                ) : (
                  <MdArrowDropDown className="text-xl" />
                )}
              </div>
              {openDropdown === "eventsMedia" && (
                <ul className="ml-4 mt-2 space-y-2">
                  {dropdownItems.eventsMedia.map((item) => (
                    <li key={item.label} className="flex items-center space-x-2 hover:text-blue-600">
                      <img src={item.icon} alt={item.label} className="h-5 w-5" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>Blogs</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
