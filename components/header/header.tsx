import { Anton_SC } from "next/font/google";

const anton = Anton_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

import  { Navigation } from "@/components/customUI/navigation";
export default function Header() {
    return (
        <div className="flex items-center justify-between py-7">
            <h1 className={`${anton.className} uppercase text-[3rem] font-bold`}>dk</h1>
            <div>
               <Navigation />
            </div>
          
        </div>
    )
}