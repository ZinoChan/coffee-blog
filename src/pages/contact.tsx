import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="mb-20">
          <div className="w-32 mb-2 h-0.5 bg-secondary "></div>
          <h3 className="font-playfair text-4xl mb-10 font-bold">
            Contact The Author
          </h3>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <form className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-8">
            <div className="flex justify-between flex-col">
              <div>
                <label
                  htmlFor="Name"
                  className="text-md font-rubik font-bold inline-block mb-4 text-chicago"
                >
                  Your Name :
                </label>
                <input
                  type="text"
                  className="border border-2 border-rafia bg-white-rock rounded w-full text-main py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="text-md font-rubik font-bold inline-block mb-4 text-chicago"
                >
                  Your Email :
                </label>
                <input
                  type="email"
                  className="border border-2 border-rafia bg-white-rock rounded w-full text-main py-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="Name"
                className="text-md font-rubik font-bold  inline-block mb-4 text-chicago"
              >
                Your Message :
              </label>
              <textarea
                rows={6}
                className="border border-2 border-rafia bg-white-rock rounded w-full text-main py-2 w-full "
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 justify-self-start  px-6 font-rubik font-bold bg-secondary text-chicago text-md"
            >
              Submit
            </button>
          </form>
          <div className="flex space-x-2 items-baseline">
            <span
              className="inline-block w-6 bg-rafia"
              style={{ height: 1 }}
            ></span>
            <h4 className="text-md font-rubuk font-bold">Socials :</h4>
            <div className="flex items-center space-x-4 text-chicago text-sm ml-8">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
