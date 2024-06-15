import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a192f]">
      <section className="flex flex-col items-start p-8 max-w-6xl mx-auto">
        <p className="text-lg text-green-400 mb-2">Hi, my name is</p>
        <h2 className="text-6xl font-bold text-gray-100 mb-6 leading-tight ">
          kwaku ntiri.
          <br /><span className="text-green-400" >I build things for the web</span>
        </h2>
        <p className="text-gray-400 mb-12 leading-relaxed">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at{" "}
          <span className="text-green-400">Bluehut Solutions</span>.
        </p>
        <button
          className="border border-green-400 text-green-400 py-2 px-6 rounded hover:bg-green-400 hover:text-gray-900 transition duration-300"
          type="button"
        >
          Check out my work!
        </button>
      </section>
    </div>
  );
};

export default Hero;
