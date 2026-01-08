import React from 'react'
import { motion } from 'framer-motion'
import ecommerceImg from '../images/ecommerce.png'
import blogImg from '../images/blog.png'
import dogGameImg from '../images/dog-game.png'
import movieImg from '../images/movie.png'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform offering user authentication and seamless product management with complete operations for items and orders.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Appwrite'],
      image: ecommerceImg,
      featured: true
    },
    {
      title: 'Full-Stack Blog Application',
      description: 'The project features complete user authentication (signup, login, logout), CRUD operations for blog posts, and role-based access control to secure user data.',
      tech: ['React.js', 'JavaScript', 'Tailwindcss', 'Appwrite'],
      image: blogImg,
      featured: true
    },
    {
        title: 'Dog Scrolling 2D Game',
        description: 'A fun and interactive 2D side-scrolling game where a dog character runs through dynamic environments, avoids obstacles, collects rewards, and progresses through increasing difficulty levels with smooth animations and responsive controls.',
        tech: ['JavaScript', 'HTML5 Canvas', 'CSS', 'Game Physics', '2D Animations'],
        image: dogGameImg,
        featured: false
    },
    {
      title: 'Movie Browser App',
      description: 'A modern movie browsing application that allows users to search through thousands of movies with an intuitive interface and seamless user experience.',
      tech: ['React.js', 'JavaScript', 'API Integration'],
      image: movieImg,
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent text-xl font-mono mr-4">03.</span>
          Some Things I've Built
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-accent/20 to-secondary overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary/80" style={{ display: 'none' }}>
                  <div className="text-center p-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/30">
                      <span className="text-2xl">📱</span>
                    </div>
                    <p className="text-textLight text-sm">{project.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
                <p className="text-textLight text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-accent border border-accent/30 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

