import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiCanva } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            <FaHtml5 key='html5' />,
            <FaCss3 key='css3' />,
            <FaJs key='js' />,
            <FaReact key='react' />,
            <SiNextdotjs key='next' />,
            <SiFramer key='framer' />,
            <FaWordpress key='wordpress' />,
          ],
        },
        {
          title: "UI/UX Design",
          icons: [
            <FaFigma key='figma' />,
            <SiAdobexd key='adobexd' />,
            <SiAdobephotoshop key='photoshop' />,
            <SiCanva key='canva' />,
          ],
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "UX/UI Designer - Codespro Soft",
          stage: "2020 - present",
        },
        {
          title: "Web Developer - Codespro Soft",
          stage: "2020 - present",
        },
        {
          title: "Intern - Matrix code",
          stage: "2018 - 2019",
        },
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title: "Bachelor in Engineering - Igbinedion University Okada",
          stage: "2023",
        },
      ],
    },
  ];

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center  xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center z-20'>
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'> stories </span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            3 years ago, I began freelancing as a developer. Since then, I&lsquo;ve done remote work
            for agencies, consulted for startups, and collaborated on digital products for business
            and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={35} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied Clients
                </div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={30} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Project
                </div>
              </div>
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[420px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 z-10`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div className='lg:flex lg:items-center gap-x-2' key={itemIndex}>
                <div>{item.title}</div>
                <div className='hidden md:flex'> - </div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className='test-2xl my-2'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
