import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
     <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <div className="max-w-screen-lg mx-auto py-24 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          This is a Project by Group G-15. 
          <br />
          Raj Shekhar Tiwari 
          <br />
          Pushkar kr Sharma 
          <br />
          Ishan Shukla
          <br />
          Sharad Pandey
          
        </p>
      </div>
    </div>

  )
}

export default About