"use client";
import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import Star from "@/components/star/star";
import Projects from "@/components/projects/projects";
import Certificates from "@/components/certificates/certificates";
import  Contact  from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import {ScrollButton} from "@/components/customUI/scrollbutton";
import Image from "next/image";
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
      <div className="w-[65%] mx-auto">
        <Header />
        <Banner />
        <Star />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
   
      </div>
          {/*  <button className="fixed bottom-0 right-0 mr-5 cursor-pointer" onClick={triggerScrollToTop}>Scroll to Top</button> */}
          <ScrollButton triggerScrollToTop={triggerScrollToTop}/>
    </div>
  );
}
