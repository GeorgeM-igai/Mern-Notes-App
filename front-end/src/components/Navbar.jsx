import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className="flex justify-between py-5 px-32">
      <h2 className="text-lg font-bold tracking-wider">Notes</h2>
      <Link to={"/create"}>
        <button className="btn btn-primary">
          New Note
        </button>
      </Link>
    </header>
  );
}

export default Navbar