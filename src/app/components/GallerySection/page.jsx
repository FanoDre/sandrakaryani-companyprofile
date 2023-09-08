"use client"

import { galleryData } from "@/app/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ImageTag from "./ImageTag";
import ImageCard from "./ImageCard";

export default function GallerySection() {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredImage = galleryData.filter((image) =>
    image.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id="gallery">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-10 md:mb-10">
        Our Gallery
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredImage.map((image, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ImageCard
              key={image.id}
              title={image.title}
              description={image.description}
              imgUrl={image.image}
              gitUrl={image.gitUrl}
              previewUrl={image.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}