"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ['latin'] })

export default function HeroSection() {
  return (
    <section className="pb-10 pt-14" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-6xl md:text-6xl lg:leading-normal font-extrabold">
            SANDRA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-700 via-yellow-300 to-yellow-900">
              <TypeAnimation
                sequence={[
                  "K",
                  500,
                  "KA",
                  500,
                  "KAR",
                  500,
                  "KARY",
                  500,
                  "KARYA",
                  500,
                  "KARYAN",
                  500,
                  "KARYANI",
                  500,

                ]}
                wrapper="span"
                speed={50}
                style={{ fontFamily: 'sans-serif' }}
                repeat={Infinity}
              />

            </span>
          </h1>
          <p className="text-white text-sm sm:text-md md:text-md lg:text-md mb-5">
            Batik Sandra Karyani mengembangkan batik Solo dengan dipadukan motif modern mengikuti tren fashion
            Pengembangan motif desain mengikuti perkembangan fashion internasional
            Produksi dilakukan di Solo dengan memberdayakan potensi sumber daya manusia yang tidak memiliki ruang mengembangkan kompetensi dalam berkarya
            Untuk menyajikan karya, dibangun sebuah showroom di Laweyan - Solo
            Untuk menjangkau konsumen yang luas, membuat outlet di perkotaan yang berkembang dihuni oleh masyarakat yang tetap menyukai batik dan bagian dari office custom
            Batik Sandra Karyani ditujukan untuk konsumen yang menginginkan batik tradisional dengan nuansa motif dan desain mengikuti tren fashion.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 hover:font-medium hover:bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-900 hover:text-black text-white"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-yellow-500 text-black hover:bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-900 hover:font-medium mt-3"
            >
              <span className="block bg-yellow hover:bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-900 rounded-full px-5 py-2 hover:text-black">
                Check Catalog
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-5 lg:mt-0 md:ml-auto sm:ml-auto"
        >
          <div className="rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] sm:w-[400px] sm:pl-10 relative">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}