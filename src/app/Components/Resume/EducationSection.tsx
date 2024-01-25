import React from "react";
import { Education } from "@/app/Types/ResumeTypes";

type Props = {
    schools: Education[];
};

const ExperienceSection: React.FC<Props> = ({ schools }) => {
    return (
        <section>
            <h2>Education</h2>
            {schools.map((edu, idx) => (
                <article key={idx}>
                    <h3>{edu.school} - {edu.fieldOfStudy}</h3>
                    <p>{edu.startDate} - {edu.endDate || 'Present'}</p>
                </article>
            ))}
        </section>
    )
}

export default ExperienceSection