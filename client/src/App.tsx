import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import StoryGenerator from './components/stories/StoryGenerator';
import StoryHistory from './components/stories/StoryHistory';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/generate" element={<StoryGenerator />} />
            <Route path="/history" element={<StoryHistory />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; 2023 Katha-Vaachak. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;