import React from 'react';
import CLogo from "./skills/c.png";
import CPPLogo from "./skills/cpp.png";
import GitLogo from "./skills/git.png";
import GitLabLogo from "./skills/gitlab.png";
import HTMLLogo from "./skills/html.png";
import JavaLogo from "./skills/java.png";
import JSLogo from "./skills/js.png";
import LinuxLogo from "./skills/linux.svg";
import MongoLogo from "./skills/mongo.png";
import SQLLogo from "./skills/mysql.svg";
import PythonLogo from "./skills/python.svg";
import ReactLogo from "./skills/react.png";
import VimLogo from "./skills/vim.png";

const Skills = () => {

  
  return (
    <div className="flex flex-wrap justify-center">
        <div className="container mx-auto p-4 lg:ml-40 lg:mt-5 overflow-x-hidden lg:w-1/2 ">
          <h1 className="text-left font-semibold text-3xl font-serif text-white mb-10 md:mr-30 lg:w-1/2 lg:text-left">My Tech Stack</h1>
          <div className="flex flex-wrap flex-col justify-center ">
            <div className="skill-group flex flex-row items-center mb-4 ">
              <h2 className="text-left font-light text-xl font-serif text-white mr-8">Web Dev</h2>
              <div className="flex flex-row justify-center items-center">
                <img src={HTMLLogo} alt="HTML" className="w-10 h-10 mr-2" />
                <img src={JSLogo} alt="JavaScript" className="w-10 h-10 mr-2" />
                <img src={ReactLogo} alt="React" className="w-10 h-10 mr-2" />
                <img src={MongoLogo} alt="MongoDB" className="w-10 h-10 mr-2" />
                <img src={SQLLogo} alt="MySQL" className="w-10 h-10 mr-2" />
              </div>
            </div>
            <div className="skill-group flex flex-row items-center mb-4">
              <h2 className="text-left font-light text-xl font-serif text-white mr-4">Languages</h2>
              <div className="flex flex-row justify-center items-center">
                <img src={CLogo} alt="C" className="w-10 h-10 mr-2" />
                <img src={CPPLogo} alt="C++" className="w-10 h-10 mr-2" />
                <img src={JavaLogo} alt="Java" className="w-10 h-10 mr-2" />
                <img src={PythonLogo} alt="Python" className="w-10 h-10 mr-2" />
              </div>
            </div>
            <div className="skill-group flex flex-row items-center mb-4">
              <h2 className="text-left font-light text-xl font-serif text-white mr-4">Other Skills</h2>
              <div className="flex flex-row justify-center items-center">
                <img src={GitLogo} alt="Git" className="w-10 h-10 mr-2" />
                <img src={GitLabLogo} alt="GitLab" className="w-10 h-10 mr-2" />
                <img src={LinuxLogo} alt="Linux" className="w-10 h-10 mr-2" />
                <img src={VimLogo} alt="Vim" className="w-10 h-10 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

        
  );
};

export default Skills;
