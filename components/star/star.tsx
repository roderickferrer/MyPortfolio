import Image from "next/image";
export default function start() {
    return (
        <div className="absolute top-35 -left-12 -z-10">
            <Image
            src={"/shooting-star.png"} alt="star" width={350} height={350}
            />
        </div>
    )
}