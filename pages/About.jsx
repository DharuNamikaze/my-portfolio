import RadarChart from "../components/RadarChart";
import "../styles/globals.css";
const About = () => {
  return (
    <>
      <section className="p-10 justify-center">
        <h1 className="text-3xl font-bold text-center mb-4">
          Hi, I&apos;m {`<Dharun/>`}
        </h1>
        <p className="mb-6 text-center">
          A passionate <span className="text-blue-600">Front-End Developer</span>{" "}
          and <span className=" text-blue-600">UI/UX Designer</span> dedicated to
          creating clean, user-friendly web experiences. - Building responsive websites - Designing professional user interfaces and visuals - Solving complex problems with creative, simple solutions
        </p>

        <div className="xl:flex">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-2">
              Skills & Technologies
            </h2>
            <ul className="space-y-2 text-center">
              <li>Languages: HTML, CSS, JavaScript, Python, C</li>
              <li>Frameworks: React.js, Next.js, Tailwind CSS</li>
              <li>Design: Figma, Adobe Photoshop, Illustrator</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
          <RadarChart/>
          </div>
        <div className="">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
            Why I Love What I Do
          </h2>
          <p className="text-base mb-4 sm:text-center  xs:px-10 ">
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