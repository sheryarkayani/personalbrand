import { motion } from "framer-motion"

export default function Header() {
  const navItems = ["about", "services", "booking"]

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      className="container mx-auto px-4 py-6 backdrop-blur-sm bg-gradient-to-r from-black via-gray-900 to-black sticky top-0 z-50"
    >
      <div className="flex justify-between items-center">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-white text-2xl font-bold relative group"
        >
          <span className="relative z-10">Sheryar Kayani</span>
          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-purple-500"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <nav>
          <motion.ul 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
            className="flex space-x-8"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <motion.a
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  whileHover="hover"
                >
                  <span className="capitalize">{item}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-500 origin-left"
                    initial={{ scaleX: 0 }}
                    variants={{
                      hover: {
                        scaleX: 1,
                        transition: { duration: 0.3 }
                      }
                    }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  )
}