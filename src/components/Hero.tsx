import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Hero = () => {
  return (
    <section className="md:py-28 py-20 relative">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-7xl font-main capitalize mb-6">
            Coffee <br /> blog
          </h1>
          <p className="md:ml-16 font-rubik text-md leading-relaxed md:max-w-screen-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores
            amet incidunt, neque saepe vitae minima! Natus ex, et rerum odit eos
            quod, soluta aliquid ut voluptate ipsa veniam mollitia. Cum dolores
            amet incidunt, neque saepe vitae minima! Natus ex, et rerum odit eos
            quod, soluta aliquid ut voluptate ipsa veniam mollitia. Cum dolores
            amet incidunt, neque saepe vitae minima! Natus ex, et rerum odit eos
            quod, soluta aliquid ut voluptate ipsa veniam mollitia.
          </p>
        </div>
        <div>
          <div className="flex space-x-4 items-center mb-4">
            <div className="bg-rafia w-16 h-16 rounded"></div>
            <div>
              <h4 className="font-rubik font-bold text-md">Zino chan</h4>
              <h3 className="font-rubik  text-sm">Author</h3>
            </div>
          </div>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores
            amet incidunt, neque saepe vitae minima!
          </p>
          <span className="text-md font-bold">
            <span className="w-6 h-0.5 bg-secondary inline-block mr-1"></span>
            Read More
          </span>
        </div>
      </div>
      <div className="absolute bottom-0 flex justify-between w-full">
        <div className="flex items-center space-x-4 text-chicago text-sm">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="scroll">scroll</div>
      </div>
    </section>
  )
}

export default Hero
