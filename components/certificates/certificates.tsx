import Image from "next/image";
export default function Certificates() {
  return (
    <div className="my-20">
      <h2 id="certificates" className="uppercase font-black pt-5">
        Certificates
      </h2>
      <div className="grid grid-cols-3 gap-10 mt-10 mb-10">
        {/*    <Image
            src={"/webdev.jpg"} alt="certificates" width={400} height={400}
            />
            <Image
            src={"/dataStructureAndAlgo.jpg"} alt="certificates" width={400} height={400}
            /> */}
        <a
          href="https://www.udemy.com/certificate/UC-7734e21b-abca-4635-806b-ec6624b35a97/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Master the Coding Interview: Data Structures and Algorithm
        </a>
        <a
          href="https://www.udemy.com/certificate/UC-4a39474f-7f92-4b1c-976d-adf2c6f6fa4c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Complete: Web Developer
        </a>
        <a
          href="https://www.freecodecamp.org/certification/dk_00/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Responsive Web Design
        </a>
        <a
          href="https://www.sololearn.com/en/certificates/CT-UFYCX23O"
          target="_blank"
          rel="noopener noreferrer"
        >
          HTML
        </a>
        <a
          href="https://www.sololearn.com/en/certificates/CT-EPKWSASC"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS
        </a>
        <a
          href="https://www.sololearn.com/en/certificates/CC-RQWATUZR"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript
        </a>
        <a
          href="https://courses.kevinpowell.co/certificates/cert_gmghNpj1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conquering Responsive Layouts
        </a>
      </div>
    </div>
  );
}
