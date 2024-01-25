import React from "react";
import { Skill } from "@/app/Types/ResumeTypes";

type Props = {
    skills: Skill[];
};

const ExperienceSection: React.FC<Props> = ({ skills }) => {
    return (
        <section>
            <h2>Skills</h2>
            {skills.map((skill, idx) => (
                <article key={idx}>
                    <h5>{skill.name} - {skill.level}</h5>
                </article>
            ))}
        </section>
    )
}

export default ExperienceSection