import React from "react";

const About = () => {
  return (
      <div className="lg:flex justify-center items-center flex-row flex-wrap sm:mt-12 md:mt-0">
        <div className="lg:w-1/2 sm:w-full md:w-full pl-10 sm:pl-10 md:pl-14">
          <h1 className="text-left font-bold text-xm md:text-xl lg:text-2xl font-serif text-white">Backend</h1>
          <h1 className="text-left font-bold text-xm md:text-xl lg:text-2xl font-serif text-white">Developer</h1>
          <div className="h-0.5 w-40 md:w-3/4 lg:w-1/2 xl:w-1/3 bg-gray-200 mb-4"></div>
          <div className="mt-4">
            <p className="text-left font-light text-xm font-serif text-white">
              I'm a Software Engineer with expertise in building scalable backend services using Node.js, C, and C++. I'm Passionate about designing efficient solutions and leveraging emerging technologies to solve complex problems.
            </p>
            <p className="mt-4 text-left font-light text-xm font-serif text-white">
              Currently with 2 years of experience, I also put my time learning other essential technologies. I'm comfortable in my ability in adapting to new technologies, as well as to collaborate with cross-functional teams, drive projects forward and deliver accurate results. I'm always looking for new challenges to take on.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full md:w-full lg:pl-10 sm:pl-0 md:pl-0 lg:mt-0 sm:mt-12 md:mt-12">
          <div className="flex flex-col justify-right items-center">
            <div className="flex flex-col justify-between">
            <div className="p-4">
                <h2 className="text-left font-bold text-xm md:text-xl lg:text-2xl font-serif text-white">Nationality</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-wrap">
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Indian</li>
                  </ul>
                </div>
              </div>
            <div className="p-4">
                <h2 className="text-left font-bold text-xm md:text-xl lg:text-2xl font-serif text-white">Hobbies</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-col flex-wrap gap-1">
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Coding</li>
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Reading</li>
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Hiking</li>
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Experiencing movies</li>
                  </ul>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-left font-bold text-xm md:text-xl lg:text-2xl font-serif text-white">Language proficiencies</h2>
                <div className="mt-2">
                  <ul className="list-none flex flex-col flex-wrap gap-1">
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; English</li>
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Telugu</li>
                    <li className="text-left font-light text-xm font-serif text-white inline">&bull; Hindi </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;