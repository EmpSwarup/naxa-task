import logo from "../../assets/naxa-logo.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-28 text-white bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Naxa Logo" className="h-10" />
      </div>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-black text-lg">
        <li className="hover:underline cursor-pointer">Services</li>
        <li className="hover:underline cursor-pointer">Portfolio</li>
        <li className="hover:underline cursor-pointer">Company</li>
        <li className="hover:underline cursor-pointer">GeoAI</li>
        <li className="hover:underline cursor-pointer">Events & Media</li>
        <li className="hover:underline cursor-pointer">Blogs</li>
      </ul>

      {/* Button */}
      <button className="bg-[#ffdc1c] text-blue-600 py-2 px-4 hover:bg-orange-400 transition duration-300">
        Let’s Talk
      </button>
    </nav>
  );
};

export default Navbar;
