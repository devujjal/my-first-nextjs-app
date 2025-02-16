"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathName = usePathname();
    // console.log(pathName)


    return (
        <div className="bg-yellow-400">
            <ul className="flex justify-center gap-5 py-3">
                <li><Link href={'/'} className={`${pathName === '/' && 'text-black font-bold'}`}>Home</Link></li>
                <li><Link href={'/about'} className={`${pathName === '/about' && 'text-black font-bold'}`}>About</Link></li>
                <li><Link href={'/blog'} className={`${pathName === '/blog' && 'text-black font-bold'}`}>Blog</Link></li>
                <li><Link href={'/service'} className={`${pathName === '/service' && 'text-black font-bold'}`}>Services</Link></li>
                <li><Link href={'/contact'} className={`${pathName === '/contact' && 'text-black font-bold'}`}>Contact</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;