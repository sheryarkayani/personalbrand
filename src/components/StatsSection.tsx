import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Users, Globe2, CalendarDays } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    { icon: Users, value: "180+", label: "Global Clients" },
    { icon: Globe2, value: "6+", label: "Years Experience" },
    { icon: CalendarDays, value: "24/7", label: "Support" }
  ]

  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-purple-900/50 border-purple-700 transform transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className="h-8 w-8 mx-auto text-purple-400" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}