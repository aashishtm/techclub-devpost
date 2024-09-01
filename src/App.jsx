import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';

const ClubWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-teal-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechClub</h1>
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:relative top-full left-0 right-0 bg-teal-500 md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li>
                <a href="#home" className="hover:text-blue-200">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-200">About</a>
              </li>
              <li>
                <a href="#join" className="hover:text-blue-200">Join Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="bg-gray-200 text-teal-600 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to TechClub</h2>
            <p className="text-xl mb-8">Innovate. Create. Collaborate.</p>
            <a
              href="#join"
              className="bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition duration-300"
            >
              Join Now
            </a>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src="/public/techclub.jpg"
                  alt="TechClub members collaborating"
                  className="rounded-lg shadow-lg mt-3"
                />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <p className="text-lg mb-3">
                  TechClub is a dynamic community of tech enthusiasts, innovators, and
                  problem-solvers. We're passionate about exploring cutting-edge
                  technologies and applying them to real-world challenges.
                </p>
                <p className="text-lg mb-3">
                  Our club provides a platform for learning, collaboration, and
                  personal growth. Whether you're a beginner or an expert, there's a
                  place for you in TechClub.
                </p>
                
        <h2 className='text-2xl font-semibold'>Why Join TechTitans?</h2>
        <ul className="list-disc list-inside text-lg pt-3">
        <li>Weekly workshops and tech talks</li>
                  <li>Hands-on projects and hackathons</li>
                  <li>Networking opportunities with industry professionals</li>
                  <li>Access to cutting-edge resources and tools</li>
            <li>Learn cutting-edge programming languages and technologies</li>
            <li>Collaborate on exciting projects with like-minded peers</li>
            <li>Participate in coding competitions and hackathons</li>
            <li>Gain valuable skills for future careers in tech</li>
            <li>Network with industry professionals through guest speaker events</li>
        </ul>

        <h2 className='text-2xl font-semibold mt-3'>How to Join</h2>
        <ul className="list-disc list-inside text-lg pt-3">
            <li>Fill out below form</li>
            <li>Attend an orientation session (held every first Monday of the month)</li>
            <li>Start attending our weekly meetings and events rightaway</li>
        </ul>
    
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-gray-200 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Join TechClub</h2>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Why do you want to join?
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-4">
                  Have questions or want to learn more about TechClub? We'd love to
                  hear from you!
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong> info@techclub.com
                  </li>
                  <li>
                    <strong>Phone:</strong> (123) 456-7890
                  </li>
                  <li>
                    <strong>Address:</strong> 123 Tech Street, Innovation City, TC 12345
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <p className="mb-4">
                  Stay updated with our latest events, projects, and announcements by
                  following us on social media.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-600 transition duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 hover:text-pink-800 transition duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <p>&copy; 2023 TechClub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClubWebsite;