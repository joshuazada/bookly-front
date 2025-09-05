'use client'

import { motion } from "framer-motion"
import { Card} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MotionCard = motion(Card)

export default function Home() {
  return (
    <div className="min-h-screen w-full p-6 md:p-10 bg-blue-50">
      <MotionCard
        className="bg-white shadow-sm rounded-2xl p-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button className="bg-pink-600">opa</Button>
      </MotionCard>
    </div>
  )
}
