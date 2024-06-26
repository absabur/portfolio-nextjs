import SkillCard from "./SkillCard";
import { frontend } from "./skillsData";

const Frontend = () => {
  return (
    <>
      <div className="back-text">
        <span>[ &quot;Skills for Frontend&quot; ]</span>
      </div>
      <div className="skills">
        <SkillCard data={frontend} />
      </div>
    </>
  );
};

export default Frontend;
