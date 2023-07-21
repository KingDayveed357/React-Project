import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {

return (
<>

<nav class="bg-[#4B6978] border-gray-200 ">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a href="/" class="flex items-center">
<span class="self-center text-3xl font-semibold whitespace-nowrap text-white">MODERNA</span>
</a>
<button type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
<span class="sr-only">Open main menu</span>
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
</svg>
</button>
<div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
<ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
<li>
<NavLink to="/" class="block py-2 pl-3 pr-4 text-white hover:text-[#A2CCE3]    md:p-0 " aria-current="page">Home</NavLink>
</li>
<li>
<NavLink to="/about" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">About</NavLink>
</li>
<li>
<NavLink to="/services" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">Services</NavLink>
</li>
<li>
<NavLink to="/portfoilo" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">Portfoilo</NavLink>
</li>
<li>
<NavLink to="/team" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">Team</NavLink>
</li>
<li>
<NavLink to="/blog" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">Blog</NavLink>
</li>

<li>
<button
className="flex items-center justify-between w-full py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#A2CCE3] md:p-0 md:w-auto"

>
Dropdown
<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"  
>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
</svg>
</button>

<div
id="dropdownNavbar"
className="dropdownNavbar z-10 hidden font-normal bg-[#4B6978] divide-y shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
>
<ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
<li>
<a href="/" className="block px-4 py-2 hover:text-[#A2CCE3]">
Dashboard
</a>
</li>
<li>
<a href="/" className="block px-4 py-2 hover:text-[#A2CCE3]">
Settings
</a>
</li>
<li>
<a href="/" className="block px-4 py-2 hover:text-[#A2CCE3]">
Earnings
</a>
</li>
</ul>
<div className="py-1">
<a
href="/"
className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
>
Sign out
</a>
</div>
</div>
</li>

<li>
<NavLink to="/contact" class="block py-2 pl-3 pr-4   md:border-0  md:p-0 hover:text-[#A2CCE3]">Contact Us</NavLink>
</li>
</ul>
</div>
</div>
</nav>

</>
)
}

export default Header
