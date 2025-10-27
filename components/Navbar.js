'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { FaHome, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <Fragment>
      <nav className="bg-white shadow-md ">
        <div className="container-main py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">MyPortfolio</h1>
          <div className="space-x-6 flex items-center">
            <Link
              href="/"
              className="text-secondary link-hover flex items-center gap-2"
            >
              <FaHome />
              Home
            </Link>
            <Link
              href="/about"
              className="text-secondary link-hover flex items-center gap-2"
            >
              <FaUser />
              About
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
