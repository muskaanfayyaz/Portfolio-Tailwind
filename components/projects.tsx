import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Full Dynamic Editable Resume Builder',
      description: 'This project allows users to create a dynamic resume through an interactive form, with real-time updates and customizable sections.',
      image: '/resume-builder.png',
      github: 'https://github.com/muskaanfayyaz/Hackaton1-milestone5',
    },
    {
      title: 'Student Management System',
      description: 'A command-line tool written in TypeScript to manage student information, including enrollment, balance management, and student status.',
      image: '/student-management.png',
      github: 'https://github.com/muskaanfayyaz/STUDENT-MANAGEMENT-SYSTEM',
    },
    {
      title: 'Calculator Project',
      description: 'A web-based application with a user-friendly interface for performing basic arithmetic operations and supporting both mouse and keyboard inputs.',
      image: '/calculator.png',
      github: 'https://github.com/muskaanfayyaz/webpage-calculator',
    },
    {
      title: 'Currency Converter CLI',
      description: 'A command-line application that converts currency amounts based on predefined exchange rates using Node.js and Inquirer.js.',
      image: '/currency-converter.png',
      github: 'https://github.com/muskaanfayyaz/cli-currency-converter',
    },
    {
      title: 'ATM Simulator CLI',
      description: 'A command-line interface simulating basic ATM functionalities like deposit, withdrawal, and balance checking using Node.js and Inquirer.js.',
      image: '/atm-simulator.png',
      github: 'https://github.com/muskaanfayyaz/atm-machine-',
    },
    {
      title: 'Linked List Implementation in C++',
      description: 'A console application that demonstrates linked list operations such as insertion, deletion, searching, and displaying the list.',
      image: '/linked-list.png',
      github: 'https://github.com/muskaanfayyaz/linked-list-in-c-',
    },
    {
      title: 'Airplane Reservation System',
      description: 'A console-based application for booking seats in an airplane, displaying fare information and seating plans.',
      image: '/airplane-reservation.png',
      github: 'https://github.com/muskaanfayyaz/seat-reservation-in-cpp',
    },
    {
      title: 'Rivo Fashion Website',
      description: 'A fashion design website that allows users to explore and shop for clothing, accessories, and designer products, offering sections like home, shop, features, and contact, along with best-selling items and exclusive offers.',
      image: '/rivo-fashion.png',
      github: 'https://github.com/muskaanfayyaz/fashion-website',
    },
  ];

  return (
    <section className="text-base sm:text-sm md:text-lg lg:text-xl project-section bg-secondary p-6 sm:p-8 md:p-14 text-center max-w-full overflow-x-hidden">
      <div className="m-0 h-full max-w-full">
        <h1 className="text-primary font-bold text-2xl sm:text-xl md:text-3xl mb-5">My Projects</h1>
        <div className="project-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-secondary p-4 sm:p-5 rounded-xl transition-all hover:scale-105 max-w-full">
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                width={300}
                height={200}
                layout="responsive"
                objectFit="cover"
                className="project-image rounded-xl"
              />
              <h3 className="project-title text-primary text-xl sm:text-lg md:text-2xl mt-4">{project.title}</h3>
              <p className="project-description text-gray-800 text-xs sm:text-sm md:text-base m-3">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link inline-block px-3 py-4 bg-primary text-secondary rounded-md font-bold transition-colors hover:bg-secondary hover:text-primary"
              >
                View Code on GitHub
              </a>
            </div>
          ))}
        </div>
        <div className="github-profile-link mt-4 flex gap-3 ml-4 justify-center items-center">
          <a
            href="https://github.com/muskaanfayyaz"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link inline-block px-3 py-4 bg-primary text-secondary rounded-md font-bold transition-colors hover:bg-secondary hover:text-primary"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
