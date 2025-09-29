import Resources from "@/components/resources/resources";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
export default function Resource() {
    return (
        <div className="w-[65%] mx-auto text-white">
            <Header />
    <Resources />
    <Footer />
        </div>
    );
}