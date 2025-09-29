import Image from "next/image";
export default function Banner() {
  return (
    <div className="my-10">
      <div>
      <h2 className="text-[3rem] font-black tracking-[0.7rem] uppercase flex flex-col">
        <span>Roderick</span>
        <span>Ferrer</span>
      </h2>
      <p>Aspiring Front-end Developer</p>
      </div>
      <div className="flex items-center justify-between gap-10">
        <p className="w-[60%] leading-7">
          Hi, I'm Derek. I graduated with a degree in Computer Science and am
          passionate about being a Web Developer. I took the time to further
          develop my skills—not only technical skills but also soft skills. When
          I'm not coding, I enjoy playing guitar, singing, gaming, and watching
          anime.
        </p>{/*  bg-[#413F3F] */}
        <div className="rounded-2xl bg-[url('/chaos.svg')] overflow-hidden rotate-12 ">
            <div className="rotate-[-9deg]">
             <Image src={"/avatar.png"} alt="avatar" width={400} height={400} unoptimized/>
            </div>
        </div>
      </div>
    </div>
  );
}
