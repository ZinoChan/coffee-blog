import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { motion } from "framer-motion"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import ScrollSvg from "./ScrollSvg"
import { slideToLeft, slideToRight } from "./PostCard"
import Loader from "./Loader"
import { useState } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const hero = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

export const slideUp = {
  initial: { opacity: 0, y: 80 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: 1.7,
    },
  },
}

const Hero = ({ data }) => {
  const title = data.edges[0]?.node?.allSettings?.generalSettingsTitle.split(
    " "
  )

  const [loading, setLoading] = useState(true)

  return (
    <>
      <Loader setLoading={setLoading} loading={loading} />
      {!loading && (
        <section className="md:py-28 py-20 relative">
          <motion.div
            variants={hero}
            className="grid md:grid-cols-3 grid-cols-1 gap-8"
          >
            <div className="md:col-span-2">
              <motion.h1
                variants={hero}
                initial="initial"
                animate="animate"
                className="overflow-hidden md:text-7xl text-5xl text-chicago capitalize mb-6"
              >
                {title && <AnimatedLetters title={title[0]} />} <br />
                {<AnimatedLetters title={title[1]} />}
              </motion.h1>
              <motion.p
                variants={slideUp}
                initial="initial"
                animate="animate"
                className="md:ml-16 font-rubik text-md leading-relaxed md:max-w-screen-sm"
              >
                {data.edges[0]?.node?.allSettings?.generalSettingsDescription}
              </motion.p>
            </div>
            <div>
              <div className="flex space-x-4 items-center mb-4">
                <motion.div
                  variants={slideToRight}
                  initial="initial"
                  animate="animate"
                  custom={1.9}
                  className="bg-rafia w-16 h-16 rounded"
                ></motion.div>
                <motion.div
                  variants={slideToLeft}
                  initial="initial"
                  animate="animate"
                  custom={1.9}
                >
                  <h4 className="font-rubik font-bold text-md">Zino chan</h4>
                  <h3 className="font-rubik  text-sm">Author</h3>
                </motion.div>
              </div>
              <motion.p
                variants={slideUp}
                initial="initial"
                animate="animate"
                className="text-sm mb-2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                dolores amet incidunt, neque saepe vitae minima!
              </motion.p>
              <motion.span
                variants={slideUp}
                initial="initial"
                animate="animate"
                className="text-md font-bold inline-block"
              >
                <span className="w-6 h-0.5 bg-secondary inline-block mr-1"></span>
                Read More
              </motion.span>
            </div>
          </motion.div>
          <div className="absolute bottom-0 flex items-center justify-between w-full">
            <motion.button
              variants={slideToRight}
              onClick={() => scrollTo("#posts")}
              initial="initial"
              animate="animate"
              custom={2}
              className="font-rubik font-bold capitalize bg-rafia py-2 px-6 text-chicago text-md"
            >
              Explore
            </motion.button>

            <motion.div
              onClick={() => scrollTo("#posts")}
              variants={slideToLeft}
              initial="initial"
              animate="animate"
              custom={2}
              className="relative scroll cursor-pointer"
            >
              <div className="circle-svg">
                <ScrollSvg />
              </div>
              <div className="absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}

const AnimatedLetters = ({ title }) => (
  <span className="inline-block">
    {[...title].map((letter, index) => (
      <motion.span
        key={`${letter}-${index}`}
        className="inline-block font-main"
        variants={letterAnimation}
      >
        {letter}
      </motion.span>
    ))}
  </span>
)

export default Hero
