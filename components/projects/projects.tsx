import Image from "next/image";
export default function projects() {
  return (
    <div className="my-20">
      <h2 id="projects" className="uppercase font-black pt-5">
        Projects
      </h2>
      {/* bg-[#4b4949]*/}
      <h3 className="uppercase mt-3">Coding Challenges</h3>
      <div className="grid gap-10 mt-10">
        <div className="flex gap-5 border-2 p-5 rounded-2xl">
          <Image
            src={"/projects-image/advicegenerator.png"}
            alt="avatar"
            width={500}
            height={500}
            unoptimized={true}
            className="rounded-2xl"
          />
          <div>
            <h3 className="py-2">Advice Generator</h3>
            <p>
              &quot;A simple app that generates random advice at the click of a
              button. I built this project to practice working with APIs and
              styling components using React and TailwindCSS.&quot;
            </p>
            <div className="py-2">
              <strong>Repo: </strong>
              <a
                href="https://github.com/DEREKFERRER/advice-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
            <p>Tools: React.js, TailwindCSS</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 p-5 rounded-2xl">
          <Image
            src={"/projects-image/timetracking.png"}
            alt="avatar"
            width={500}
            height={500}
            unoptimized={true}
            className="rounded-2xl"
          />
          <div>
            <h3 className="py-2">Time tracking dashboard</h3>
            <p>
              &quot;A dashboard that tracks time spent on different activities
              and presents it in a clean, responsive layout. I used CSS Grid to
              structure the design and JSON data to make the dashboard
              dynamic.&quot;
            </p>
            <div className="py-2">
              <strong>Repo: </strong>
              <a
                href="https://github.com/DEREKFERRER/time-tracking-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>

            <p>Tools: react, Tailwind-css</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 p-5 rounded-2xl">
          <Image
            src={"/projects-image/form.png"}
            alt="avatar"
            width={500}
            height={500}
            unoptimized={true}
            className="rounded-2xl"
          />
          <div>
            <h3 className="py-2">Contact Form</h3>
            <p>
              &quot;An accessible contact form with multiple input types and
              validation. This project allowed me to improve my form-building
              skills, focusing on usability, accessibility, and user
              experience.&quot;
            </p>
            <div className="py-2">
              <strong>Repo: </strong>
              <a
                href="https://github.com/DEREKFERRER/contact-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
              <p>Tools: React, React-hook-form, and Toastify</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 border-2 p-5 rounded-2xl">
          <Image
            src={"/projects-image/chart.png"}
            alt="avatar"
            width={500}
            height={500}
            unoptimized={true}
            className="rounded-2xl"
          />
          <div>
            <h3 className="py-2">Expenses Chart Component</h3>
            <p>
              &quot;A responsive bar chart that displays daily expenses using
              data from a local JSON file. This project helped me practice
              creating custom chart components and visualizing data with React
              Chart.js and Flexbox.&quot;
            </p>
            <div className="py-2">
              <strong>Repo: </strong>
              <a
                href="https://github.com/DEREKFERRER/expenses-chart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            </div>
            <p>Tools: Reactjs, Reactchartjs, and flexbox</p>
          </div>
        </div>
        <span>
        <a className="hover:underline" href="https://www.frontendmentor.io/profile/DEREKFERRER" target="_blank" rel="noopener noreferrer">See More Coding Challenges &#8594;</a>
        </span>
      </div>
      <div className="grid  gap-10 mt-10 ">
        <div>
          <h3 className="uppercase mb-10">Udemy</h3>
          <div className="flex gap-5 border-2 p-5 rounded-2xl">
            <Image
              src={"/projects-image/face-recognition.png"}
              alt="avatar"
              width={500}
              height={500}
              unoptimized={true}
              className="rounded-2xl"
            />
            <div>
              <h3>Face Recognition</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Repo
              </a>
              <p>
                Tools: React.js, tachyons, node.js, express.js, machine learning
                API, PostgreSQL
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-10">Personal Project</h3>
          <div className="flex gap-5 border-2 p-5 rounded-2xl">
            <Image
              src={"/projects-image/portfolio.png"}
              alt="avatar"
              width={500}
              height={500}
              unoptimized={true}
              className="rounded-2xl"
            />
            <div>
              <h3>Portfolio</h3>
              <p>
                A responsive portfolio website built with React and TailwindCSS,
                featuring reusable components to showcase my projects and
                skills. This project highlights my abilities, which I
                strengthened through coding challenges, online courses, and
                contributing to open-source projects.
              </p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Repo
              </a>
              <p>Tools: React.js, TailwindCSS</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="uppercase mb-10">hacktoberfest</h3>
          <div className="flex gap-5 border-2 p-5 rounded-2xl">
            <Image
              src={"/projects-image/hacktoberfest.png"}
              alt="avatar"
              width={500}
              height={500}
              unoptimized={true}
              className="rounded-2xl"
            />
            <div>
              <h3>Animation Nation</h3>
              <p>
                Contributed an HTML & CSS animation to the ZTM Community&apos;s
                Hacktoberfest 2024 project, Animation Nation.
              </p>
              <div className="py-2">
                <strong>Repo: </strong>
                <a
                  href="https://github.com/DEREKFERRER/Animation-Nation/tree/challenge/Art/DEREKFERRER-movingCircle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Link
                </a>
              </div>
              <p>Tools: HTML, CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
