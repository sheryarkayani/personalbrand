import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div>
            <motion.h4 
              whileHover={{ scale: 1.05 }}
              className="text-white text-lg font-bold mb-4"
            >
              Sheryar Kayani
            </motion.h4>
            <p className="hover:text-white transition-colors duration-300">
              Empowering businesses with trusted mobile and web app development solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <p>Email: info@sheryarkayani.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Sheryar Kayani. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}