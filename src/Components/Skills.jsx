import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import firebase from "../assets/firebase.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import github from "../assets/github.svg";
import database from '../assets/ashis.png'

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[30px]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 ">{"//These are the technologies I've worked with"}</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="html_img" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="html_img" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="html_img" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="html_img" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="html_img" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="html_img" />
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={firebase} alt="html_img" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadown-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={database} alt="html_img" />
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
