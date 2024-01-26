import React from "react";
import { SkillGroup } from "@/app/Types/ResumeTypes";

type Props = {
  skillGroups: SkillGroup[];
};

const ExperienceSection: React.FC<Props> = ({ skillGroups }) => {
  return (
    <section className="grid gap-3">
        <h2>Skills</h2>
        <div className="grid gap-2">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3>{group.groupName}</h3>
              <ul>
                {group.skills.map((skill, skillIdx) => (
                  <li key={skillIdx}>
                    {skill.name} ({skill.level})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  );
};

export default ExperienceSection;
