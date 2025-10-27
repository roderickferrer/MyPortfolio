import { Anton_SC } from "next/font/google";

const anton = Anton_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

import Image from "next/image";
export default function Banner() {
  return (
    <div className="text-center md:text-start my-10 grid md:grid-cols-[2fr_1fr]">
      <div>
      <div>
      <h2 className={`${anton.className} font-black tracking-[0.7rem] uppercase flex flex-col`}>
        <span className="text-[2rem] md:text-[4rem]">Roderick</span>
        <span className="text-[2rem] md:text-[4rem]">Ferrer</span>
      </h2>
      <i className="underline">Front-end Developer &#40;Intern&#41;</i>
      </div>
      <div className="pt-5">
        <p className="w-full md:w-[80%] leading-7">
          Hi, I'm Derek. I graduated with a degree in Computer Science and am
          passionate about being a Web Developer. I took the time to further
          develop my skills—not only technical skills but also soft skills. When
          I'm not coding, I enjoy playing guitar, singing, gaming, and watching
          anime.
        </p>
        </div>
        </div>
        <div className="rounded-2xl  bg-contain bg-no-repeat overflow-hidden flex justify-center items-center">
            <div className="">
             <Image src={"/avatar.png"} alt="avatar" width={500} height={500} unoptimized/>
            </div>
        </div>
      
    </div>
  );
}
