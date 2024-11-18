// import { useState } from 'react';
// import Globe from 'react-globe.gl';

// import Button from '../components/Button.jsx';

// const About = () => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(' jaiparasher30@gmail.com');
//     setHasCopied(true);

//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <section className="c-space my-20" id="about">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Hi, I’m Jai Parasher</p>
//               <p className="grid-subtext">
//                 A Software Developer, I have honed my skills in both frontend and backend dev, creating dynamic
//                 and responsive websites.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">Tech Stack</p>
//               <p className="grid-subtext">
//                 I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
//                 applications
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="col-span-1 xl:row-span-4">
//           <div className="grid-container">
//             <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//               <Globe
//                 height={326}
//                 width={326}
//                 backgroundColor="rgba(0, 0, 0, 0)"
//                 backgroundImageOpacity={0.5}
//                 showAtmosphere
//                 showGraticules
//                 globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                 bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                 labelsData={[{ lat: 28.644800, lng:77.216721, text:"I'm here!", color: 'white', size: 40 }]}
//               />
//             </div>
//             <div>
//               <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
//               <p className="grid-subtext">I&apos;m based in Delhi,India and open to remote work worldwide.</p>
//               <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-2 xl:row-span-3">
//           <div className="grid-container">
//             <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

//             <div>
//               <p className="grid-headtext">My Passion for Coding</p>
//               <p className="grid-subtext">
//                 I love solving problems and building things through code. Programming isn&apos;t just my
//                 profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="xl:col-span-1 xl:row-span-2">
//           <div className="grid-container">
//             <img
//               src="assets/grid4.png"
//               alt="grid-4"
//               className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
//             />

//             <div className="space-y-2">
//               <p className="grid-subtext text-center">Contact me</p>
//               <div className="copy-container" onClick={handleCopy}>
//                 <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
//                 <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">jaiparasher@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Globe from "react-globe.gl";
import "../index.css"; 
import Button from './../components/Button';
import { Bio, skills } from "../constants";
import * as THREE from '//unpkg.com/three/build/three.module.js';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();

    useEffect(() => {
      const globe = globeEl.current;

      // Auto-rotate
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.8;

    }, []);


  useEffect(() => {
    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    gsap.set(photos, { yPercent: 101 });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      // Pin the right section (photos)
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".left",
      });

      // Create ScrollTrigger for each content section and its corresponding photo
      details.forEach((detail, index) => {
        const headline = detail.querySelector("h1");
        const animation = gsap.timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation,
          scrub: 2,
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="c-space my-20" id="about">
      <div className="gallery flex text-white">
        {/* Left content */}
        <div className="left w-full lg:w-1/2  justify-center items-center h-screen hidden lg:flex">
          <div className="desktopPhotos border-black-300 bg-black-200 w-full h-3/4 relative rounded-lg shadow-lg overflow-hidden">
            <div className="desktopPhoto About absolute w-full h-full  flex justify-center items-center">
              <img src="assets/face.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            </div>
            <div className="desktopPhoto border-black-300 bg-black-200 Skills absolute w-full h-full  flex justify-center items-center">
              <div className="w-full flex flex-wrap mt-7  justify-center">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                      {skill.title}
                    </h3>
                    <div className="flex justify-center flex-wrap gap-3 mb-4">
                      {skill.skills.map((item) => (
                        <div
                          key={item.name}
                          className="text-[16px] font-normal text-primary border border-opacity-80 border-gray-500 rounded-[12px] px-4 py-3 flex items-center justify-center gap-2 md:text-[14px] md:px-3 md:py-2 sm:text-[14px] sm:px-3 sm:py-1"
                        >
                          <img src={item.image} alt={item.name} className="w-6 h-6" />
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="desktopPhoto Contact overflow-hidden border-black-300 bg-black-200 absolute w-full h-full flex justify-center">
            <div className="mt-96"></div>
            <Globe
            className="mt-80"
                height={1056}
                width={1056}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                ref={globeEl}
                animateIn={false}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.644800, lng:77.216721, text:"I'm here!", color: 'white', size: 40 }]}
              />
            </div>
          </div>
        </div>
        {/* Right content */}
        <div className="right w-1/2 hidden lg:block">
          <div className="desktopContent mx-auto w-4/5">
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="grid-headtext">About</h1>
                <hr className="rounded-3xl border-2 border-[#0140CB] w-28"/>
              </div>
              <div className="space-y-2">
                <p className="grid-subtext">A Full Stack Developer based in Delhi, India, with a strong passion for building efficient and user-centric applications. I recently graduated with a Bachelor of Technology in Computer Science and Engineering and have experience working on full-stack web development projects using the MERN stack, AI-driven applications, and scalable backends.</p>
                
                <p className="grid-subtext">I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.</p>
              </div>
            </div>
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="grid-headtext">Skills</h1>
                <hr className="rounded-3xl border-2 border-[#0140CB] w-24"/>
              </div>
              <p className="grid-subtext">I specialize in various languages, frameworks, and tools to build scalable and efficient applications. My expertise covers both frontend and backend development, allowing me to create seamless user interfaces while ensuring secure and optimized backend systems.</p>
              <p className="grid-subtext"> With a focus on modern development practices, I continuously refine my skills to stay updated with evolving technologies. I aim to deliver high-quality, maintainable solutions that enhance functionality and user experience.</p>
            </div>
            <div className="desktopContentSection min-h-screen flex flex-col justify-center">
              <div className="mb-4">
                <h1 className="grid-headtext">Contact</h1>
                <hr className="rounded-3xl border-2 border-[#0140CB] w-[9.2rem]"/>
              </div>
              <div>
                <p className="grid-subtext">I’m very flexible with time zone communications & locations</p>
                <p className="grid-subtext">I&apos;m based in Delhi, India and open to remote work worldwide.</p>
                
                {/* Links Section */}
                <div className="mt-6 flex flex-wrap justify-between px-16">
                  <a href={Bio.github} rel="noopener noreferrer" className="text-blue-500 text-3xl gap-1 flex items-center hover:underline">
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/> GitHub
                  </a>
                  <a href={Bio.leetcode} rel="noopener noreferrer" className="text-blue-500 gap-1 flex items-center text-3xl hover:underline">
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>LeetCode
                  </a>
                </div>
                <div className="mt-2 flex flex-wrap justify-between px-16">
                  <a href={Bio.linkedin} rel="noopener noreferrer" className="text-blue-500 gap-1 flex items-center text-3xl hover:underline">
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>LinkedIn
                  </a>
                  <a href={Bio.resume} rel="noopener noreferrer" className="text-blue-500 gap-1 flex items-center text-3xl hover:underline">
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>Resume
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Mobile content */}
        <div className="flex w-full flex-col justify-center gap-7 items-center lg:hidden">

            <div className="space-y-4">
              <div className="mx-auto ">
                <div className="mb-4 flex flex-col">
                  <h1 className="grid-headtext">About</h1>
                  <hr className="rounded-3xl border-2 border-[#0140CB] w-32"/>
                </div>
                  <div className="space-y-2">
                  <p className="grid-subtext">A Full Stack Developer based in Delhi, India, with a strong passion for building efficient and user-centric applications. I recently graduated with a Bachelor of Technology in Computer Science and Engineering and have experience working on full-stack web development projects using the MERN stack, AI-driven applications, and scalable backends.</p>
                </div>
              </div>
              <div className="mobilePhoto flex justify-center items-center border-black-300 bg-black-200 h-80 mx-auto mt-20 rounded-lg">
                <img src="assets/face.png" alt="grid-1" className="w-full sm:h-64 h-56 object-contain" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="mx-auto ">
                <div className="mb-4 flex flex-col">
                  <h1 className="grid-headtext">Skills</h1>
                  <hr className="rounded-3xl border-2 border-[#0140CB] w-24" />
                </div>
                <p className="grid-subtext">
                  I specialize in various languages, frameworks, and tools to build scalable and efficient applications. My expertise covers both frontend and backend development, allowing me to create seamless user interfaces while ensuring secure and optimized backend systems.
                </p>
              </div>
              <div className=" flex justify-center items-center border-black-300 bg-black-200 mx-auto rounded-lg">
                <div className="w-full flex flex-wrap mt-7  justify-center">
                  {skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="w-full"
                    >
                      <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                        {skill.title}
                      </h3>
                      <div className="flex justify-center flex-wrap gap-3 mb-4">
                        {skill.skills.map((item) => (
                          <div
                            key={item.name}
                            className="text-[16px] font-normal text-primary border border-opacity-80 border-gray-500 rounded-[12px] px-4 py-3 flex items-center justify-center gap-2 md:text-[14px] md:px-3 md:py-2 sm:text-[14px] sm:px-3 sm:py-1"
                          >
                            <img src={item.image} alt={item.name} className="w-6 h-6" />
                            {item.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="mx-auto">
                <div className="mb-4 flex flex-col">
                  <h1 className="grid-headtext">Contact</h1>
                  <hr className="rounded-3xl border-2 border-[#0140CB] w-36" />
                </div>
                <div>
                  <p className="grid-subtext">I’m very flexible with time zone communications & locations. I&apos;m based in Delhi, India and open to remote work worldwide.</p>
                  {/* Links Section */}
                  <div className="mt-6 flex flex-wrap justify-between">
                    <a href={Bio.github} rel="noopener noreferrer" className="text-blue-500 flex items-center gap-1 text-lg hover:underline">
                    <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>GitHub
                    </a>
                    <a href={Bio.leetcode} rel="noopener noreferrer" className="text-blue-500 flex items-center gap-1 text-lg hover:underline">
                    <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>LeetCode
                    </a>
                    <a href={Bio.linkedin} rel="noopener noreferrer" className="text-blue-500 flex items-center gap-1 text-lg hover:underline">
                    <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>LinkedIn
                    </a>
                    <a href={Bio.resume} rel="noopener noreferrer" className="text-blue-500 flex items-center gap-1 text-lg hover:underline">
                    <img src="/assets/arrow-up.png" alt="arrow-up" className="about-btn_arrow"/>Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
