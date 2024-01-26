import React from "react";
import { Education } from "@/app/Types/ResumeTypes";

type Props = {
    schools: Education[];
};

const EducationSection: React.FC<Props> = ({ schools }) => {
    return (
        <section className="grid gap-3">
            <h2>Education</h2>
            {schools.map((edu, idx) => (
                <article key={idx} className="grid gap-2">
                    <h3>{edu.school} - {edu.fieldOfStudy}</h3>
                    <p>{edu.startDate} - {edu.endDate || 'Present'}</p>
                </article>
            ))}
        </section>
    )
}

export default EducationSection