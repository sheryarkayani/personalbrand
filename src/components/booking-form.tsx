'use client'

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"

export default function BookingForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="bg-purple-900/50 border-purple-700 overflow-hidden">
        <CardContent className="p-6 relative">
          {/* Calendly inline widget */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sheryarkayani70/30min?background_color=3d135e&text_color=ffffff&primary_color=9333ea"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

