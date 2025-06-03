import Home from "./Body/Home/Home";
import About from "./Body/About/About";
import Skills from "./Body/Skills/Skills";
import Education from "./Body/Education/Education";
import Contact from "./Body/Contact/Contact";
import Project2 from "./Body/Projects2/Project2";
import StarBack from "./StarBack";
import { Toaster } from "sonner";

const Main = () => {
  return (
    <div className="main container">
      <Toaster richColors position="top-right" />
      <StarBack />
      <Home />
      <About />
      <Skills />
      <Project2 />
      <Education />
      <Contact />
    </div>
  );
};

export default Main;
