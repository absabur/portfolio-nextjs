

import SkillCard from "./SkillCard";
import { others } from "./skillsData";

const Others = () => {
  return (
    <>
      <div className="back-text">
        <span>[ &quot;Other Skills&quot; ]</span>
      </div>
      <div className="skills">
        <SkillCard data={others} />
      </div>
    </>
  );
};

export default Others;
