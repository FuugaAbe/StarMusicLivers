import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Hero1 } from './Hero1'
import { Hero2 } from './Hero2'

export function Hero() {
  const [currentPattern, setCurrentPattern] = useState<1 | 2>(2)

  return (
    <div className="relative">
      {/* Pattern switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          size="sm"
          variant={currentPattern === 1 ? "default" : "outline"}
          onClick={() => setCurrentPattern(1)}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          パターン1
        </Button>
        <Button
          size="sm"
          variant={currentPattern === 2 ? "default" : "outline"}
          onClick={() => setCurrentPattern(2)}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          パターン2
        </Button>
      </div>

      {/* Render current pattern */}
      {currentPattern === 1 ? <Hero1 /> : <Hero2 />}
    </div>
  )
}