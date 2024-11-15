import RadarChart from "../components/RadarChart";
import "../styles/globals.css";
const About = () => {
  return (
    <>
      <section className="p-10 justify-center">
        <h1 className="text-3xl font-bold text-center mb-4">
          Hi, I&apos;m {`<Dharun/>`}
        </h1>
        <p className="text-lg mb-4 text-center">
          A passionate <span className="text-blue-600">Front-End Developer</span>{" "}
          and <span className=" text-blue-600">UI/UX Designer</span> dedicated to
          creating clean, user-friendly web experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-2">What I Do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Building responsive websites with HTML, CSS, JavaScript,
                React.js, and Tailwind CSS
              </li>
              <li>
                Designing professional user interfaces and visual with Figma and Illustrator.
              </li>
              <li>Solving complex problems with creative, simple solutions</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-2">
              Skills & Technologies
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Languages: HTML, CSS, JavaScript, Python, C</li>
              <li>Frameworks: React.js, Next.js, Tailwind CSS</li>
              <li>Design: Figma, Adobe Photoshop, Illustrator</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
          </div>
        </div>
        <div>
          <RadarChart/>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">
            Why I Love What I Do
          </h2>
          <p className="text-base mb-4 sm:text-center ">
          I&apos;m dedicated to crafting digital products that are not only functional but also visually engaging. 
          For me, each project is an opportunity to connect with users and make their online experience 
          more enjoyable and meaningful.
          </p>
        </div>

        <div className="text-center mt-8">
          Take My {" "}
          Resume 
            <a
            href="../assets/Dharun-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-600 hover:underline"
          > here</a>
        </div>
      </section>
    </>
  );
};
export default About;