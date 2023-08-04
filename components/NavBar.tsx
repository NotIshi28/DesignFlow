import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const NavBar = () => {
    const session = {}

    return (
        <nav className='flexBetween navbar '>
            <div>
                <Link href='/'>
                    <Image
                        src='/logo.svg'
                        width={230}
                        height={86}
                        alt='DesignFlow'
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.key}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        UserPhoto 
                        <Link href="/create-project">
                            Share Work 
                        </Link>
                    </>
                ): (
                    <AuthProviders />
                )
                }
            </div>
        </nav>
    )
}

export default NavBar