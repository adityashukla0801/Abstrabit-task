import React from "react";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <div className="w-[1366px] container mx-auto">
      <Navbar />
      <InfoSection />
    </div>
  );
};

export default Home;
