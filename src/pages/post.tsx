import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Post = () => {
  return (
    <Layout>
      <section className="py-20">
        <div>
          <div className="flex justify-between">
            <div>
              <div className="w-32 mb-2 h-0.5 bg-secondary "></div>
              <h3 className="font-playfair text-4xl mb-10 font-bold">
                Lorem ipsum dolor sit amet consectetur
              </h3>
            </div>

            <div className="flex items-center space-x-4 text-chicago text-sm">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

          <div className="max-w-screen-md text-center mx-auto mb-6">
            <StaticImage
              src="../images/blog.jpg"
              alt="blog image"
              width={600}
              height={400}
            />
          </div>
          <div className="max-w-screen-md mx-auto">
            <p className="text-sm leading-loose font-rubik mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt
              fugit, distinctio praesentium iusto libero deleniti, dignissimos,
              corporis iste alias officia possimus. Esse commodi debitis autem
              aperiam voluptate fugit minus. Ducimus maiores architecto impedit
              a exercitationem ex labore voluptates perferendis animi. Nam quas
              itaque possimus? Doloribus, hic. Impedit nam ut labore vitae vero
              doloremque voluptatibus, consequuntur natus, ratione dolorum
              <br /> <br />
              perferendis. Aspernatur molestiae velit, natus assumenda quibusdam
              eaque eius laboriosam. Odio ad amet, sit aliquid excepturi nihil
              corrupti numquam facilis esse nemo voluptatibus eveniet qui soluta
              voluptates maiores quos, modi impedit. Labore, cupiditate!
              Repellendus, perferendis adipisci autem cumque fuga cupiditate
              eius, rerum ab veniam eveniet blanditiis nobis rem illum quos sunt
              velit commodi, animi quod facere repellat eligendi sit!
              <br /> <br />
              Consequatur, illo! Similique nemo odio impedit deleniti fugiat?
              Aliquam atque autem debitis eos porro odit molestiae libero minus
              natus quas consectetur animi voluptatibus voluptatum cupiditate
              saepe corporis provident dolor, architecto doloremque quisquam.
            </p>
            <div className="flex space-x-2 items-baseline">
              <span
                className="inline-block w-6 bg-rafia "
                style={{ height: 1 }}
              ></span>
              <h4 className="text-md font-rubuk font-bold">Zino chan</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Post
