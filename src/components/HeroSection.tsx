import { Button } from "./ui/button"
import { CheckCircle } from 'lucide-react'
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Enhanced background effects */}
      <motion.div 
        className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 md:w-96 md:h-96"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-50"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -30, 30, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="min-h-[80vh] flex items-center relative w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6 md:space-y-8 text-center lg:text-left px-4 md:px-0"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="space-y-4 md:space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2, 
                  duration: 1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                {/* Split text animation */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4">
                  {"Transform your Vision into Reality".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                BOOK YOUR FREE STRATEGY CALL
              </motion.h2>
            </div>
            
            {/* Enhanced feature items */}
            <motion.div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              {[
                "Scalable web & mobile apps",
                "6+ years of proven success",
                "50+ engineers at your time zone"
              ].map((text, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div 
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10"
                    whileHover={{ 
                      scale: 1.3,
                      backgroundColor: "rgba(147, 51, 234, 0.3)" 
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <CheckCircle className="h-4 w-4 text-purple-400" />
                  </motion.div>
                  <p className="text-base md:text-lg text-gray-200">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA button */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#booking">
                  <Button 
                    size="lg" 
                    className="bg-[#9333EA] hover:bg-[#7928CA] text-white px-6 md:px-8 py-6 md:py-7 text-base md:text-lg rounded-xl
                      shadow-[0_0_20px_rgba(147,51,234,0.3)] 
                      hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]
                      transition-all duration-300 ease-out
                      hover:rotate-1"
                  >
                    Book Your Free Strategy Call
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced image section */}
          <motion.div 
            className="relative h-[400px] sm:h-[500px] lg:h-[800px] w-full flex items-center justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheryar%20remv-qEH9iffbxFyeECC1TIeqVHqzpgnxdT.png"
              alt="Hero Image"
              className="object-contain object-center relative z-0 hover:filter hover:brightness-110 w-full h-full"
              animate={{
                scale: [1, 1.03, 1],
                rotate: [0, 1, -1, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

