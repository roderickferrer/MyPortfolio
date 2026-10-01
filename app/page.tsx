"use client";
import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import Projects from "@/components/projects/projects";
import Certificates from "@/components/certificates/certificates";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import {ScrollButton} from "@/components/customUI/scrollbutton";
import {useRef} from "react";

export default function Portfolio() {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const triggerScrollToTop = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return (
    <div ref={scrollAreaRef} className=" text-white">
      <div className="mx-5 md:w-[65%] md:mx-auto">
        <Header />
        <Banner />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
      <div className="hidden md:block">
        <ScrollButton triggerScrollToTop={triggerScrollToTop} />
      </div>
    </div>
  );
}
