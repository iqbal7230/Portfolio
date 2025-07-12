"use client";


import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { Navbartop } from "@/components/Navbar";
import { AboutTimeline } from "@/components/About";
import { Skillbutton } from "@/components/skill";
import { Project } from "@/components/projects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
  
        <Navbartop />
        <Hero />
        <Skillbutton />
        <Project />
        <Experience />
        <AboutTimeline/>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
