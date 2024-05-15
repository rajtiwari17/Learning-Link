import React from 'react';
import Navbar from './Navbar';

function About() {

  // useEffect(() => {
  //   const currentTheme = localStorage.getItem('theme');
  //   const element = document.documentElement;
  //   if (currentTheme === 'dark') {
  //     element.classList.add('dark');
  //   } else {
  //     element.classList.remove('dark');
  //   }
  // }, []);

  return (
    <>
     <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white">
      <Navbar />
      <div className="max-w-screen-lg mx-auto py-24 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
        Welcome to our learning platform, brought to you by Group G-15 under the guidance of Shivam Dixit. 
        Our platform is designed to provide users with easy access to a vast array of educational resources 
        sorted by category. With a focus on simplicity and effectiveness, users can navigate through various
         topics of interest, curated by our team. Whether you're delving into literature, science, or technology,
          our platform aims to empower learners of all backgrounds.
           Meet our dedicated team members: <br /> Raj Shekhar Tiwari,<br /> Pushkar kr Sharma,<br /> Ishan Shukla, <br /> Sharad Pandey. <br />
            Together, we strive to make learning an enriching and enjoyable experience for everyone.
          
        </p>
      </div>
    </div>
    </>
  )
}

export default About