import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Gallery",
            href: "/gallery"
        },
        {
            name: "About",
            href: "/about"
        }
    ]

    return (
        <div className='Nav'>
            <h3 className='logo'>Nav</h3>
            <div className="hamburger">
                hamburger
            </div>
            <ul className="navlinks">
                {navList.map((link) => {
                    return(
                        <li>
                            <Link className="link" to={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Nav;
