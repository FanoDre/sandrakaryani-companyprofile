"use client"

import Image from "next/image"
import { useState, useTransition } from "react"
import { tabData } from "@/app/utils"
import TabButton from "./TabButton"

export default function AboutSection() {
  const [tab, setTab] = useState("visi")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            Batik Sandra Karyani mengembangkan batik Solo dengan dipadukan motif modern mengikuti tren fashion
            Pengembangan motif desain mengikuti perkembangan fashion internasional.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("visi")}
              active={tab === "visi"}
            >
              {" "}
              Visi{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("misi")}
              active={tab === "misi"}
            >
              {" "}
              Misi{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tabData.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}