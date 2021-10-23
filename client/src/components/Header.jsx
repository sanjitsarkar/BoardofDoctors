import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Logo from "../image/logo.png"
const Header = () => {
    return (
        <div>
            <nav className="flex items-center  justify-between px-5 bg-primary text-white text-opacity-70 py-5">
             <div className="flex items-center gap-2">
               <img src={Logo} alt="Board of doctors" className="w-16"/>
               <h1 className="font-semibold text-2xl">Board of doctors</h1>
             </div>
             <div className="flex items-center gap-2">
             <FontAwesomeIcon icon={faUserAlt} size="lg"/>
               <div className="">Login</div>
             <FontAwesomeIcon icon={faChevronDown}/>

             </div>
            </nav>
        </div>
    )
}

export default Header
