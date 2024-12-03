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
      <div className="text-start px-20 py-16">
        <h1 className="text-base">SERVICES</h1>
        <h2 className="text-5xl font-bold">At NAXA, we work on ideas; ideas that can provide simple solutions to complex problems.</h2>
        <p className="mt-4 text-sm">
        We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.
        </p>
      </div>
    </div>
  );
};

export default LandingSection;
