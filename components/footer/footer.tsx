export default function Footer() {
  return (
    <div>
      <div className="bg-[#373333]  flex  p-10 gap-20 rounded-[2rem] ">
        <div className="flex flex-col "> 
          <a href="#" className="mb-2">
            Home
          </a>
          <a href="#projects" className="mb-2">
            Projects
          </a>
            <a href="#certificates" className="mb-2">
            Certificates
          </a>
          <a href="#contact" className="mb-2">
            Contact
          </a>
        </div>
        <div className="flex flex-col">
              <a href="#resources" target="_blank" rel="noopener noreferrer" className="mb-2">
            Resources
          </a>
            <a href="https://www.linkedin.com/in/roderickferrer/" target="_blank" rel="noopener noreferrer" className="mb-2">
            LinkedIn
          </a>
            <a href="https://github.com/DEREKFERRER" target="_blank" rel="noopener noreferrer" className="mb-2">
            GitHub
          </a>
          <a href="https://www.holopin.io/@derekferrer#" target="_blank" rel="noopener noreferrer">Holopin</a>
        </div>
        <div></div>
      </div>
      <div className="flex justify-between my-10">
        <span>2025</span>
        <span>V.2</span>
      </div>
    </div>
  );
}
