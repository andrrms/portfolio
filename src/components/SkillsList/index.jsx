import SkillMeter from "./SkillMeter";

import skillsData from "../../data/skills";
import { SkillsListContainer } from "./styles";

export default function SkillsList() {
  return (
    <SkillsListContainer>
      {skillsData.map((skill, i) => (
        <SkillMeter
          key={i}
          img={skill.skillImages}
          webpImg={skill.skillWebpImages}
          alt={`Logotipo da tecnologia ${skill.skillName}`}
          name={skill.skillName}
          value={1}
          max={1}
          color={skill.skillColor}
          hidePercentage
        />
      ))}
    </SkillsListContainer>
  );
}
