import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { Typewriter } from "react-simple-typewriter";
const Header = () => {  
  return (
    <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 overflow-hidden">
      <Navbar />
      {/* image */}
      <img
        className="absolute bottom-0 right-0 rounded-full sm:rounded-none  lg:h-[83%] object-cover lg:left-0 mx-auto"
        src="images/image.png"
        alt="Mustafa Tariq"
      />
      {/* circle */}
      <div className="hidden lg:block absolute -bottom-[58%] right-0 left-0 mx-auto w-[48rem] h-[48rem] -z-10 rounded-full bg-indigo-900"></div>
      {/* animated Text */}
      <div className="absolute top-1/4 w-full text-center sm:text-left text-6xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-32 xl:text-7xl font-bold font-nunito">
        <span className="text-gray-600">Frelance</span>
        <p id="typewriter" className="text-red-500">
          <Typewriter
            words={["Developer", "Designer", "Writer", "Student"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      </div>
      {/* Texts */}

      <div className="lg:flex flex-col absolute hidden top-10 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3 rounded-lg gap-5 shadow-xl ">
        <h1 className="text-4xl text-indigo-900 font-bold">Hi, I'm Mustafa</h1>
        <p className="text-gray-400">
          I'm a proactive 19-year-old exploring FULL-STACK developer, with one
          year of Experience. I'm a dedicated Software Engineering student in my
          fifth semester at COMSATS University Lahore.
        </p>
        <Link
          to="./Contacts"
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default Header;