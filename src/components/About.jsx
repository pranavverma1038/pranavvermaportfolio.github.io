import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-text mb-6 flex items-center">
              <span className="text-accent text-xl font-mono mr-4">01.</span>
              About Me
            </h2>
            <div className="text-textLight space-y-4">
              <p>
              Continuously learning and highly adaptable to new technologies and evolving environments, I am a versatile and detail-driven Software Developer with hands-on experience in application development, building robust backend systems, and automating workflows. Proficient in Java, Spring Boot, React Native, and REST APIs, with a strong foundation in integrating large-scale datasets across distributed systems.
              </p>
              <p>
                Demonstrated expertise in developing scalable microservices, optimizing data pipelines, 
                and ensuring end-to-end data validation and transformation. Known for solving complex 
                integration challenges, enhancing system efficiency, and delivering high-performance 
                backend and application solutions.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {['Java', 'Spring Boot', 'React.js', 'React Native', 'Node.js', 'SQL/NoSQL', 'Express.js', 'JavaScript','kotlin', 'flutter'].map((tech) => (
                  <li key={tech} className="flex items-center text-sm">
                    <span className="text-accent mr-2">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto aspect-square border-2 border-accent rounded-lg p-2">
              <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-4xl text-accent font-bold">PV</span>
                  </div>
                  <p className="text-textLight">Software Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

