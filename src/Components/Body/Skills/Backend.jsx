
import SkillCard from "./SkillCard";

import { backend } from "./skillsData";

const Backend = () => {
  return (
    <>
      <div className="back-text">
        <span>[ "Skills for Backend" ]</span>
      </div>
      <div className="skills">
        <SkillCard data={backend} />
      </div>
    </>
  );
};

export default Backend;
