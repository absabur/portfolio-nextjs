

import SkillCard from "./SkillCard";
import { others } from "./skillsData";

const Others = () => {
  return (
    <>
      <div className="back-text">
        <span>[ "Other Skills" ]</span>
      </div>
      <div className="skills">
        <SkillCard data={others} />
      </div>
    </>
  );
};

export default Others;
