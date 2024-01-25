import React from "react";
import { Experience } from "@/app/Types/ResumeTypes";

type Props = {
    experiences: Experience[];
};

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
    return (
        <section>
            <h2>Experience</h2>
            {experiences.map((exp, idx) => (
                <article key={idx}>
                    <h3>{exp.position} - {exp.company}</h3>
                    <p>{exp.startDate} - {exp.endDate || 'Present'}</p>
                    <ul>
                        {exp.details.map((detail, detailIdx) => (
                            <li key={detailIdx}>{detail}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}

export default ExperienceSection