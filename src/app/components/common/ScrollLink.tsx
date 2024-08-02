'use client';

import { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';

interface ScrollLinkProps {
    id: string;
    children: ReactNode;
    className?: string; // Adicione esta linha para permitir o uso do className
}

function ScrollLink({ id, children, className }: ScrollLinkProps) {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Link href={`#${id}`} passHref>
            <div onClick={handleClick} className={className}>
                {children}
            </div>
        </Link>
    );
}

export default ScrollLink;
