import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../Navbar/MobileNavbar";
import landingBg from "../../assets/landing-bg.jpg";

const LandingSection = () => {
  return (
    <div
      className="bg-cover text-black font-montserrat"
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 0",
        backgroundColor: "#fff",
      }}
    >
      {/* Navbar is rendered inside landing because it uses the same background image */}
      <div className="hidden lg:block">
        <Navbar />
      </div>
      {/* Two seperate navbars for large screens and mobile */}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <div className="text-start px-4 sm:px-8 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20">
        <h1 className="text-xs sm:text-sm font-bold text-[#ffab00] mb-3 sm:mb-5">
          SERVICES
        </h1>
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium w-full md:w-4/5 leading-snug sm:leading-relaxed">
          At <span className="text-[#124af4]">NAXA</span>, we work on{" "}
          <span className="text-[#124af4]">ideas</span>; ideas that can provide{" "}
          <span className="text-[#124af4]">simple solutions</span> to{" "}
          <span className="text-[#124af4]">complex problems.</span>
        </h2>
        <p className="mt-6 md:mt-8 font-medium sm:font-semibold text-base sm:text-lg leading-relaxed w-full md:w-2/3">
          We work as a team to generate, explore, build, and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
