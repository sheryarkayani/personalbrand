import { motion } from "framer-motion"
import BookingForm from "./booking-form"

export default function BookingSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div 
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white"
            whileInView={{ 
              backgroundImage: "linear-gradient(45deg, #fff, #a855f7, #fff)",
              backgroundSize: "200%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
            animate={{ backgroundPosition: ["0%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Book Your Free Strategy Call
          </motion.h2>
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Schedule a 30-minute call to discuss how we can help transform your business
          </motion.p>
        </motion.div>
        <BookingForm />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/sheryarkayani70/30min?background_color=3d135e&text_color=ffffff&primary_color=9333ea"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </motion.div>
    </section>
  )
}