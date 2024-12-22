'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar } from "./ui/calendar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent } from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const inputVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } }
}

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Form submitted:", { date, timeSlot })
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-purple-900/50 border-purple-700 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-700/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <CardContent className="p-6 relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="space-y-4"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { id: "company", label: "Company", type: "text", placeholder: "Your company" }
                ].map((field) => (
                  <motion.div key={field.id} variants={inputVariants}>
                    <Label htmlFor={field.id} className="text-white text-base mb-2">
                      {field.label}
                    </Label>
                    <motion.div whileHover={{ scale: 1.01 }} whileFocus={{ scale: 1.01 }}>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-purple-900/50 border-purple-600/50 text-white placeholder:text-gray-400 h-12 text-base transition-all duration-200 hover:border-purple-400 focus:border-purple-300"
                        required
                      />
                    </motion.div>
                  </motion.div>
                ))}

                <motion.div variants={inputVariants}>
                  <Label htmlFor="time" className="text-white text-base mb-2">
                    Preferred Time
                  </Label>
                  <Select onValueChange={setTimeSlot}>
                    <SelectTrigger className="bg-purple-900/50 border-purple-600/50 text-white h-12 hover:border-purple-400 transition-colors duration-200">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-purple-900 border-purple-600">
                      {["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"].map((time) => (
                        <SelectItem 
                          key={time} 
                          value={time} 
                          className="text-white hover:bg-purple-800 transition-colors"
                        >
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label className="text-white text-base mb-2">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0 bg-transparent"
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full bg-purple-500 hover:bg-purple-600 text-white h-12 text-base rounded-md relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <motion.span
                  initial={false}
                  animate={{ opacity: isSubmitting ? 0 : 1 }}
                >
                  Schedule Free Strategy Call
                </motion.span>
                {isSubmitting && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                )}
                <motion.div
                  className="absolute inset-0 bg-purple-400/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

