import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'B.E. in Computer Science and Engineering',
      institution: 'Chitkara University',
      period: '2021–2025',
      details: 'CGPA: 9.41'
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'St. Edward\'s School, Shimla',
      period: '2020',
      details: '90.8%'
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'St. Edward\'s School, Shimla',
      period: '2018',
      details: '86.8%'
    }
  ]

  const certifications = [
    'Code-Studio - Advance Data Structures course completion',
    'Code-Studio - Advance Web Development course completion',
    'Cybersecurity By Cisco Networking Academy',
    'AWS Academy - Cloud Foundations',
    'Meta - Front-End Development Certificate'
  ]

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-text mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent text-xl font-mono mr-4">05.</span>
          Education & Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 rounded-lg p-6 border border-accent/20"
          >
            <h3 className="text-xl font-bold text-accent mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <h4 className="text-lg font-bold text-text">{edu.degree}</h4>
                  <p className="text-accent">{edu.institution}</p>
                  <p className="text-textLight text-sm">{edu.period} • {edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary/50 rounded-lg p-6 border border-accent/20"
          >
            <h3 className="text-xl font-bold text-accent mb-6">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="text-textLight flex items-start">
                  <span className="text-accent mr-3 mt-1">▹</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education

