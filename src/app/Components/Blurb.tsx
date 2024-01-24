import React from "react";
import Link from "next/link";
import { ReactElement } from "react";

type BlurbProps = {
    icon: ReactElement;
    headline: string;
    url: string;
};

const Blurb: React.FC<BlurbProps> = ({ icon, headline, url }) => {
    return (
        <Link href={url} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-2">{icon}</div>
            <div className="text-xl font-semibold">{headline}</div>
        </Link>
    )
}

export default Blurb;