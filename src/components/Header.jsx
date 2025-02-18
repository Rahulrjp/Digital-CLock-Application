import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDarkMode } from './DarkModeContext';

export default function Header() {

    const { isDarkMode, setIsDarkMode } = useDarkMode();

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                        <div className='text-gray-700 font-bold flex justify-center p-4 text-5xl'>
                            <h1 className='select-none transition-colors' style={{ color: !isDarkMode ? 'white' : 'rgb(22 78 99)' }}>Digital Clock</h1>
                        </div>
                    </Link>
                    <div
                        className="hidden justify-between items-center lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-orange-400 ${isActive ? 'scale-125' : 'scale-95'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 select-none`
                                    }

                                >
                                    Clock
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/timer"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isDarkMode ? 'text-gray-500' : 'text-white'} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 select-none ${isActive ? 'scale-125' : 'scale-95'}`
                                    }
                                >
                                    Timer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/stopwatch"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-green-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-500 lg:p-0 select-none ${isActive ? 'scale-125' : 'scale-95'}`
                                    }
                                >
                                    Stopwatch
                                </NavLink>
                            </li>
                            <li className='ml-5'>
                                <label className="relative inline-flex items-center cursor-pointer gap-2">

                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={isDarkMode}
                                        onChange={() => setIsDarkMode(!isDarkMode)}
                                        id='dark-mode'

                                    />
                                    <div className="flex items-center w-14 h-7 bg-black rounded-full peer peer-checked:bg-white justify-center transition-color text-white peer-checked:text-black duration-100 hover:scale-105 ring-1 active:scale-0">
                                        <p className='transition-transform duration-200 select-none'>{isDarkMode ? 'Light' : 'Dark'}</p>
                                    </div>
                                </label>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}