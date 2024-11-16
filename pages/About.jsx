import RadarChart from "../components/RadarChart";
import "../styles/globals.css";
const About = () => {
  return (
    <>
      <section className="xs:p-6 justify-center">
        <h1 className="text-3xl font-bold text-center mb-4">
          Hi, I&apos;m {`<Dharun/>`}
        </h1>
        <p className="text-center md:px-11">
          A passionate{" "}
          <span className="text-blue-600">Front-End Developer</span> and{" "}
          <span className=" text-blue-600">UI/UX Designer</span> dedicated to
          creating clean, user-friendly web experiences. - Building responsive
          websites - Designing professional user interfaces and visuals -
          Solving complex problems with creative, simple solutions
        </p>
        <div className="md:flex md:space-x-8 lg:space-x-12 items-center">
  {/* RadarChart */}
  <div className="flex-1">
    <RadarChart />
  </div>
  
  {/* Skills & Technologies */}
  <div className="flex-1 mb-6 xs:text-left sm:text-left">
    <h2 className="text-xl font-semibold text-blue-600 mb-2">
      Skills & Technologies
    </h2>
    <ul className="space-y-3">
      <li>Languages: HTML, CSS, JavaScript, Python, C</li>
      <li>Frameworks: React.js, Next.js, Tailwind CSS</li>
      <li>Design: Figma, Adobe Photoshop, Illustrator</li>
      <li>Version Control: Git, GitHub</li>
    </ul>
  </div>
</div>

        <div className="xs:text-left sm:text-center sm:">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">
            Why I Love What I Do
          </h2>
          <p className="text-base mb-4 md:px-11 ">
            I&apos;m dedicated to crafting digital products that are not only
            functional but also visually engaging. For me, each project is an
            opportunity to connect with users and make their online experience
            more enjoyable and meaningful.
          </p>
        </div>
        <div className="text-center mt-8">
          Take My Resume
          <a
            href="../assets/Dharun-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            {" "}
            here
          </a>
        </div>
      </section>
    </>
  );
};
export default About;
