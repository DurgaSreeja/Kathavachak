import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Katha-Vaachak</h1>
      <p className="text-xl mb-8">Unleash your creativity with AI-powered storytelling</p>
      <div className="flex justify-center space-x-4">
        <Link to="/generate" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center">
          <Sparkles className="mr-2" />
          Generate a Story
        </Link>
        <Link to="/register" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;