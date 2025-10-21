import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black">
      <div className="flex justify-between items-center h-16 md:h-20 lg:h-15 px-5 sm:px-10 lg:px-20 text-white">

        {/* Logo */}
         
        <a href="#" className="text-2xl lg:text-xxl flex items-center gap-2 font-serif text-pink-600">
          <span>BARIQ</span>
        </a>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex gap-10 text-m text-black">
          <li><a href="/#" className="hover:underline ">Home</a></li>
          <li><a href="/contact" className="hover:underline ">Design Your Charm</a></li>
          <li><a href="/shop" className="hover:underline ">Shop</a></li>
          <li><a href="/about" className="hover:underline ">About Us </a></li>
          <li><a href="/about" className="hover:underline ">Contact Us </a></li>
        </ul>

        {/* icons */}
        <div className="flex items-center gap-5">

          <ul className="hidden md:flex gap-6 text-m text-pink-600">
          <li><a href="#" className="group hover:text-pink-500 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="size-5 group-hover:fill-pink-500 transition-all duration-300">
          <path stroke-linecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </a></li>
          <li><a href="#" className="group hover:text-pink-500 transition-colors duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="size-5 group-hover:fill-pink-500 transition-all duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          </a></li>
          <li><a href="#" className="group hover:text-pink-500 transition-colors duration-300">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="size-5 group-hover:fill-pink-500 transition-all duration-300">
          <path stroke-linecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          </a></li>
          </ul>

        {/* Actions */}

          <button className="md:hidden text-2xl text-pink-600" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div>
          <ul className="md:hidden bg-pink-300 text-white p-5 space-y-3 ">
          <li><a href="/#" className="hover:underline ">Home</a></li>
          <hr className="border-gray-300 my-4" />

          <li><a href="/contact" className="hover:underline ">Design Your Charm</a></li>
          <hr className="border-gray-300 my-4" />

          <li><a href="/shop" className="hover:underline ">Shop</a></li>
          <hr className="border-gray-300 my-4" />

          <li><a href="/about" className="hover:underline ">About Us </a></li>
          <hr className="border-gray-300 my-4" />

          <li><a href="/about" className="hover:underline ">favorite</a></li>
           <hr className="border-gray-300 my-4" />

          <li><a href="/shop" className="hover:underline ">profile</a></li>
          <hr className="border-gray-300 my-4" />

          <li><a href="/about" className="hover:underline ">cart</a></li>


          
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
