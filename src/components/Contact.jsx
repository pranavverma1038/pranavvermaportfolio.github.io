import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      url: 'mailto:pranav2000verma@gmail.com',
      icon: '✉️'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/pranav-verma-5543b42ba/',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/pranavverma1038',
      icon: '🔗'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-accent text-lg font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            06. What's Next?
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-textLight text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            For professional inquiries or potential collaborations, please feel free to get in touch!
          </motion.p>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent text-accent px-6 py-3 rounded hover:bg-accent/10 transition-all font-mono text-sm flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="text-center mt-16 text-textLight text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>Designed & Built by Pranav Verma</p>
      </motion.div>
    </section>
  )
}

export default Contact

