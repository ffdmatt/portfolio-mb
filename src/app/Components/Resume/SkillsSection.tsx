import React from "react";
import { SkillGroup } from "@/app/Types/ResumeTypes";

type Props = {
  skillGroups: SkillGroup[];
};

const ExperienceSection: React.FC<Props> = ({ skillGroups }) => {
  return (
    <section className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Skills</h2>
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-4">
              <h3 className="text-xl font-semibold mb-2">{group.groupName}</h3>
              <ul className="list-disc pl-5">
                {group.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="text-gray-700 dark:text-gray-300 mb-1">
                    {skill.name} ({skill.level})
                  </li>
                ))}
              </ul>
            </div>
          ))}
    </section>
  );
};

export default ExperienceSection;
