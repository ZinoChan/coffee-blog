import { motion, useAnimation } from "framer-motion"
import React from "react"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const ScrollReveal = ({ children, variants, custom = null }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start("animate")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      variants={variants}
      custom={custom}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
