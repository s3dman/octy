import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div style={
      {backgroundImage: 'url("https://images.unsplash.com/photo-1516310029508-8f346b013f45?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}
    }>
    <header className="text-gray-800 body-font ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">OCTY</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <button className="mr-5 hover:text-gray-900 font-medium">Campaigns</button>
          </Link>
          <Link href="/" passHref>
            <button className="mr-5 hover:text-gray-900 font-medium">Dashboard</button>
          </Link>
          <Link href="/about" passHref>
            <button className="mr-5 hover:text-gray-900 font-medium">About</button>
          </Link>
          <Link href="/login" passHref>
            <button className="mr-5 hover:text-gray-900 font-medium">Login</button>
          </Link>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Header;