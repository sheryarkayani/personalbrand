import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

export default function ServicesSection() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms, tailored to your business needs."
    },
    {
      title: "Web App Development",
      description: "Scalable and responsive web applications using cutting-edge technologies and frameworks."
    },
    {
      title: "UI/UX Design",
      description: "User-centric design solutions that enhance user experience and drive engagement."
    },
    {
      title: "Consulting Services",
      description: "Expert advice on technology strategy, architecture, and digital transformation."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="services" className="container mx-auto px-4 py-12 md:py-24">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
      >
        Our Services
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="bg-purple-900/50 border-purple-700 transform transition-all duration-300 hover:scale-105 hover:bg-purple-900/70 hover:shadow-lg hover:shadow-purple-500/50">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}