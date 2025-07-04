import Home from "./Body/Home/Home";
import About from "./Body/About/About";
import Skills from "./Body/Skills/Skills";
import Education from "./Body/Education/Education";
import Contact from "./Body/Contact/Contact";
import Project2 from "./Body/Projects2/Project2";
import { Toaster } from "sonner";
import ThemeToggle from "./ToggleTheme";

const Main = () => {
  return (
    <div className="main container">
      <ThemeToggle />
      <Toaster richColors position="top-right" />
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
