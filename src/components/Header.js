import {Link} from 'react-router-dom';
import React, {useState} from 'react';

function Header(){

    const [active, setActive] = useState(false);
    const ToggleClick = () =>{
        setActive(!active);
    }

    return (
        <header clasName="">
                {/* <i onClick={ToggleClick} className="fa fa-bars text-white text-lg my-3 mr-5 cursor-pointer bg-blue-600 absolute -top-1 z-20 lg:right-2 md:right-2 sm: -right-1 w-10 h-10 text-center rounded-full p-2 hover:bg-blue-700 hover:transition ease duration-150 lg:hidden md:hidden"></i> */}
                <nav className="w-full bg-blue-600 flex justify-between border-b border-gray-500 shadow-lg  flex-col fixed z-10 lg:flex-row md:flex-row">
                    <div className="title text-gray-50 py-2 pl-4">
                        <h3 className="font-poppins text-sm lg:text-lg md:text-lg">DAFENHS Student Information System</h3>
                        <span className="text-xs lg:text-base md:text-base">Developed by:&nbsp;Richard I. Felicilda</span>
                    </div>
                        <i onClick ={ToggleClick} className="fa fa-bars cursor-pointer absolute right-3 top-3 text-gray-50 text-lg lg:hidden md:hidden"></i>
                    <ul className={`${!active && 'hidden lg:inline-flex md:inline-flex'} flex flex-col lg:flex-row md:flex-row mt-1 lg:mt-4 lg:mr-8 md:mt-4 md:mr-8`}>
                        <li className="mr-3 text-gray-50 w-full cursor-pointer py-2 lg:py-0 md:py-0 hover:bg-blue-800 hover:transition ease-in-out duration-200 lg:hover:bg-blue-600 lg:hover:text-yellow-300 md:hover:bg-blue-600 md:hover:text-yellow-300">
                            <Link className="ml-4 text-sm lg:text-calc-1">Login</Link>
                        </li>
                        <li className="text-gray-50 cursor-pointer w-full py-2 lg:py-0 md:py-0 hover:bg-blue-800 hover:transition ease-in-out duration-200 lg:hover:bg-blue-600 lg:hover:text-yellow-300 md:hover:bg-blue-600 md:hover:text-yellow-300">
                            <Link className="ml-4 lg:ml-2 md:ml-2 text-sm lg:text-calc-1">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header;