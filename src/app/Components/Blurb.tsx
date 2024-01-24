import React from "react";
import Link from "next/link";
import { ReactElement } from "react";

type BlurbProps = {
    icon: ReactElement;
    headline: string;
    url: string;
    className?: string;
};

const Blurb: React.FC<BlurbProps> = ({ icon, headline, url, className }) => {
    const baseStyles = "flex flex-col items-center p-4 py-12 border border-blue-300 rounded-lg hover:shadow-lg transition-shadow duration-300";
    return (
        <Link href={url} className={`${baseStyles} ${className}`}>
            <div className="text-4xl mb-2">{icon}</div>
            <div className="text-xl font-semibold">{headline}</div>
        </Link>
    )
}

export default Blurb;