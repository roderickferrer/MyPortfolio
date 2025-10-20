export default function Certificates() {
  type CertificatesProps = {
    title: string;
    link: string;
  };
   
  const certificates: CertificatesProps[] = [
    {
      title: "Master the Coding Interview: Data Structures and Algorithm",
      link: "https://www.udemy.com/certificate/UC-7734e21b-abca-4635-806b-ec6624b35a97/",
    },
    {
      title: "The Complete: Web Developer",
      link: "https://www.udemy.com/certificate/UC-4a39474f-7f92-4b1c-976d-adf2c6f6fa4c/",
    },
    {
      title: "Responsive Web Design", 
      link: "https://www.freecodecamp.org/certification/dk_00/responsive-web-design",
    },
    { 
      title: "HTML",  
      link: "https://www.sololearn.com/en/certificates/CT-UFYCX23O",
    },
    { 
      title: "CSS",
      link: "https://www.sololearn.com/en/certificates/CT-EPKWSASC",
    },
    {
      title: "JavaScript",
      link: "https://www.sololearn.com/en/certificates/CC-RQWATUZR",
    },
    {
    title: "Conquering Responsive Layouts",
    link: "https://courses.kevinpowell.co/certificates/cert_gmghNpj1"
    }
  ]

  return (
    <div className="my-20">
      <h2 id="certificates" className="uppercase font-black pt-5">
        Certificates
      </h2>
      <div className="grid text-center md:grid-cols-3 gap-10 mt-10 mb-10">
        {certificates.map((certificate, index) => (
          <div key={index} className="p-5 flex justify-center items-center border rounded-lg hover:scale-105 hover:shadow-lg transition duration-300">
            <div>
              <h3 className="mb-2">{certificate.title}</h3>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >View Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
