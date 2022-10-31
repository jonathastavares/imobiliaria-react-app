import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // <Link to="/">Texto do link</Link>
  return (
    <nav className='flex gap-4 justify-between px-6 py-4 items-center font-bold'>
      <Link to="/" className='text-letra hover:text-secundaria'> 
          <img src="./estadisticas.png" alt="logo"className=' w-[50px]'/> 
      </Link>
      <Link to="/login" className='px-6 py-2 bg-secundaria hover:bg-primaria text-white rounded-md'> Login </Link>
    </nav>
  )
};

export default Navbar;
