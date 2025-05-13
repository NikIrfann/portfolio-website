"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc ml-4 text-base lg:text-lg text-white">
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc ml-4 text-base lg:text-lg text-white">
        <li>Bachelor of Science in Computer Science</li>
        <li>Master of Science in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc ml-4 text-base lg:text-lg text-white">
        <li>AWS Certified Solutions Architect - Associate</li>
        <li>Microsoft Certified: Azure Developer Associate</li>
        <li>Certified ScrumMaster</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/aboutme.png"
          alt="About Section"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-white">
            Hi there! I'm a passionate software developer with a keen interest
            in creating innovative, efficient, and scalable applications. With
            experience in front-end and back-end technologies, I thrive on
            solving complex problems and turning ideas into functional code. My
            expertise spans a variety of programming languages, including
            JavaScript, Python, and Java, and I'm always eager to learn new
            tools and frameworks to stay on top of the ever-evolving tech
            landscape.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
