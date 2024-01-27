import React from "react";
import { Experience } from "@/app/Types/ResumeTypes";
import "./ExperienceSection.css";

type Props = {
    experiences: Experience[];
};

const ExperienceSection: React.FC<Props> = ({ experiences }) => {
    return (
        <section className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Experience</h2>
            {experiences.map((exp, idx) => (
                <article key={idx} className="mb-4">
                    <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-300">{exp.startDate} - {exp.endDate || 'Present'}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <ul className="list-disc pl-5 mt-2">
                        {exp.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-gray-700 dark:text-gray-300">{detail}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </section>
    )
}

export default ExperienceSection