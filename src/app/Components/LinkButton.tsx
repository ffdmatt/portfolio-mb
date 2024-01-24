import Link from "next/link";
import React from "react";

type LinkButtonProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({children, url, className}) => {
  const baseStyles = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition ease-in duration-200';

  return (
    <Link href={url} className={`${baseStyles} ${className}`}>
        {children}
    </Link>
  )
}

export default LinkButton;