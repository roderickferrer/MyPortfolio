import { Anton_SC } from "next/font/google";

const anton = Anton_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

import  { Navigation } from "@/components/customUI/navigation";
import { MobileNavigation } from "@/components/customUI/mobile-nav";
export default function Header() {
    return (
        <div className="flex items-center justify-between py-7">
            <h1 className={`${anton.className} uppercase text-2xl md:text-[3rem] font-bold`}>dk</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
               <Navigation />
            </div>

            {/* Mobile Navigation */}
            <div className="block md:hidden text-end fixed bottom-5 right-5 z-50">
                <MobileNavigation/>
            </div>
        </div>
    )
}