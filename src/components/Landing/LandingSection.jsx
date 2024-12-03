import Navbar from "../Navbar/Navbar";
import landingBg from "../../assets/landing-bg.jpg"

const LandingSection = () => {
  return (
    <div
      className="bg-cover bg-center text-black font-montserrat"
      style={{
        backgroundImage: `url(${landingBg})`,
      }}
    >
      {/* Include Navbar */}
      <Navbar />

      {/* Landing Content */}
      <div className="text-start px-28 py-16">
        <h1 className="text-sm font-bold text-[#ffab00] mb-5">SERVICES</h1>
        <h2 className="text-6xl font-medium w-4/5">At <span className="text-[#124af4]">NAXA</span>, we work on <span className="text-[#124af4]">ideas</span>; ideas that can provide <span className="text-[#124af4]">simple solutions</span> to <span className="text-[#124af4]">complex problems.</span></h2>
        <p className="mt-8 font-semibold text-lg w-1/2">
        We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
