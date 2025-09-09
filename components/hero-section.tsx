"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { language } = useLanguage()

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/large%20%28online-video-cutter.com%29%20%283%29-4qRzte3xHEs2P9bUf3nyVAsz0wS7rY.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 text-balance leading-tight animate-fade-in">
            {getTranslation(language, "heroTitle")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-delay">
            {getTranslation(language, "heroSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold hover-lift"
              onClick={() => (window.location.href = "/contact")}
            >
              {getTranslation(language, "getStarted")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold bg-transparent hover-lift"
              onClick={() => (window.location.href = "/about")}
            >
              {getTranslation(language, "learnMore")}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in-delay">
            <p className="text-white/70 text-sm mb-4">
              {language === "fa"
                ? "مورد اعتماد رهبران صنعت در سراسر جهان"
                : language === "ru"
                  ? "Нам доверяют лидеры отрасли по всему миру"
                  : "Trusted by industry leaders worldwide"}
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-white font-semibold">
                {language === "fa" ? "فورچن ۵۰۰" : language === "ru" ? "Fortune 500" : "Fortune 500"}
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white font-semibold">
                {language === "fa" ? "دسترسی جهانی" : language === "ru" ? "Глобальный охват" : "Global Reach"}
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="text-white font-semibold">
                {language === "fa" ? "۲۵+ سال" : language === "ru" ? "25+ лет" : "25+ Years"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
