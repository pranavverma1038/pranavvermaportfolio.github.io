import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'C', 'Kotlin']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Microservices']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'React Native', 'Tailwind CSS', 'Angular', 'Flutter', 'Redux']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'NoSQL', 'Redis','Data Modeling', 'Query Optimization']
    },
    {
      title: 'Tools & Cloud',
      skills: ['AWS', 'Kafka', 'Docker','Jenkins', 'Postman', 'Git', 'Jira', 'MS Excel']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent text-xl font-mono mr-4">04.</span>
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 rounded-lg p-6 border border-accent/20"
            >
              <h3 className="text-lg font-bold text-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm text-textLight bg-primary px-3 py-1 rounded border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-secondary/50 rounded-lg p-6 border border-accent/20"
        >
          <h3 className="text-lg font-bold text-accent mb-4">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4 text-textLight text-sm">
            <div className="flex items-center">
              <span className="text-accent mr-2">▹</span>
              <span>Cleared IIT Kharagpur Test of Fundamentals Design and Algorithms</span>
            </div>
            <div className="flex items-center">
              <span className="text-accent mr-2">▹</span>
              <span>Selected for Google Developer App Development Program</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

