import React from "react";
import { Education } from "@/app/Types/ResumeTypes";

type Props = {
    schools: Education[];
};

const EducationSection: React.FC<Props> = ({ schools }) => {
    return (
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {schools.map((edu, idx) => (
                <div key={idx} className="mb-4">
                    <h3 className="text-xl font-semibold">{edu.school}</h3>
                    <p className="text-gray-600">{edu.degree} in {edu.fieldOfStudy}</p>
                    <p className="text-gray-500">{edu.startDate} - {edu.endDate || 'Present'}</p>
                </div>
            ))}
        </section>
    )
}

export default EducationSection