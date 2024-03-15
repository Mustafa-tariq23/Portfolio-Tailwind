import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <div className=" bg-white h-full w-full dark:bg-slate-900">
      <Navbar />
      <div className="container mx-auto flex-col-reverse lg:flex-row flex py-40 gap-40">
        {/* section one */}
        <div className="relative mx-auto w-20 h-20 top-0 left-10 ml-2 items-center md:mx-0">
          <img className="absolute top-2" src="images/dots.png" alt="dots" />
          <div className="h-[24rem] w-[18rem] absolute overflow-hidden rounded-full bg-pink-300">
            <img className="absolute top-24" src="images/image.png" alt="" />
          </div>
        </div>
        {/* section two */}
        <div className=" mx-auto my-auto flex flex-wrap w-[50%] flex-col gap-3">
          <h1 className="text-indigo-600 font-bold font-nunito">About Me</h1>
          <h1 className="text-3xl  font-nunito font-medium">Better Design</h1>
          <h1 className="text-3xl  font-nunito font-medium">
            Better Experience
          </h1>
          <p class="text-gray-400">
            I design and build digital products. I'm also a multi-disciplinary
            maker with over 10 years of experiences in wide range of design
            disciplines.
          </p>

          <h2 class="text-gray-400 font-medium">HTML</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-full bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">JAVASCRIPT</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-[80%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 class="text-gray-400 font-medium">REACT</h2>
          <div class="w-full bg-gray-200 h-1.5 rounded-md">
            <div class="w-[70%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About