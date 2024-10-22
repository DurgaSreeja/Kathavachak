import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8" />
          <span className="text-xl font-bold">Katha-Vaachak</span>
        </Link>
        <div className="space-x-4">
          <Link to="/generate" className="hover:text-indigo-200">Generate Story</Link>
          <Link to="/history" className="hover:text-indigo-200">My Stories</Link>
          <Link to="/login" className="hover:text-indigo-200">Login</Link>
          <Link to="/register" className="hover:text-indigo-200">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;