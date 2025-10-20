import { Anton_SC } from "next/font/google";

const anton = Anton_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});
import Resources from "@/components/resources/resources";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { BackButton } from "@/components/customUI/back-button";
export default function Resource() {
    return (
        <div className="mx-5 md:w-[65%] md:mx-auto text-white">
               <div className="flex items-center justify-between py-7">
                    <h1 className={`${anton.className} uppercase text-2xl md:text-[3rem] font-bold`}>dk</h1>
               </div>
             
            <BackButton />
            <Resources />
            <Footer />
        </div>
    );
}