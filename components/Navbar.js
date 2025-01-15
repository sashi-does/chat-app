"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">MyApp</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/forums" className="hover:text-gray-400">
            Forums
          </Link>
          <Link href="/chat" className="hover:text-gray-400">
            Chat
          </Link>
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export const metadata = {
    title: 'Dox',
    description: 'Dox helps you to connect with the people of your choice'
  }

export default Navbar;
