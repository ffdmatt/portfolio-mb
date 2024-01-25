import React from "react";
import { Experience } from "@/app/Types/ResumeTypes";
import "./ExperienceSection.css";

type Props = {
    experiences: Experience[];
};

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
    return (
        <section className="grid gap-3 experienceSection">
            <h2>Experience</h2>
            {experiences.map((exp, idx) => (
                <article key={idx} className="grid gap-1">
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