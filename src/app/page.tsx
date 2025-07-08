"use client";

import { useState, useEffect } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ultra Modern Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'transparent',
          borderBottom: 'none'
        }}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-2 relative">
            {/* Logo */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17"/>
                    <path d="M2 12L12 17L22 12"/>
                  </svg>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent' 
                    : 'text-white drop-shadow-lg'
                }`}>
                  SeaLive
                </h1>
                <p className={`text-sm font-medium transition-all duration-300 ${
                  isScrolled ? 'text-gray-500' : 'text-blue-200'
                }`}>
                  Professional Yacht Transport
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" 
                 className={`relative font-bold text-sm uppercase tracking-wide transition-all duration-300 group ${
                   isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                 }`}
                 onClick={() => scrollToSection('home')}>
                Ana Sayfa
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" 
                 className={`relative font-bold text-sm uppercase tracking-wide transition-all duration-300 group ${
                   isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                 }`}
                 onClick={() => scrollToSection('services')}>
                Hizmetler
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" 
                 className={`relative font-bold text-sm uppercase tracking-wide transition-all duration-300 group ${
                   isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                 }`}
                 onClick={() => scrollToSection('about')}>
                Hakkımızda
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" 
                 className={`relative font-bold text-sm uppercase tracking-wide transition-all duration-300 group ${
                   isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
                 }`}
                 onClick={() => scrollToSection('contact')}>
                İletişim
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span>Teklif Al</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
                onClick={toggleMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
      )}
      
      <div className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-8">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="space-y-6">
            <a href="#home" 
               className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4" 
               onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}>
              Ana Sayfa
            </a>
            <a href="#services" 
               className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4" 
               onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }}>
              Hizmetler
            </a>
            <a href="#about" 
               className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4" 
               onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }}>
              Hakkımızda
            </a>
            <a href="#contact" 
               className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors border-b border-gray-200 pb-4" 
               onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>
              İletişim
            </a>
            
            <button className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl">
              Teklif Al
            </button>
          </nav>
        </div>
      </div>

      {/* Modern Hero Section with Video Background */}
      <section id="home" className="hero-modern h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="hero-video-background">
          <iframe
            src="https://www.youtube.com/embed/5CVzOqvqI38?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=5CVzOqvqI38&disablekb=1&fs=0&cc_load_policy=0&enablejsapi=0&origin=http://localhost:3000&widget_referrer=http://localhost:3000"
            title="Professional Yacht Transport Services"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Overlay */}
        <div className="hero-video-overlay"></div>

        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>

        <div className="container mx-auto px-4 hero-content-modern">
          <div className="hero-text-content">
            <h1 className="hero-title-modern">
              Profesyonel Yat Taşıma Hizmeti
            </h1>
            <p className="hero-subtitle-modern">
              Yatınızı güvenli ve profesyonel bir şekilde istediğiniz yere taşıyoruz. 
              Uzman ekibimiz ve özel ekipmanlarımızla size en iyi hizmeti sunuyoruz.
            </p>
            
            <div className="hero-cta-group">
              <button className="cta-primary">
                <span>Hemen Teklif Al</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="cta-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V16.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Detayları İncele</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden gif-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yat taşımacılığında 15 yıllık deneyimimiz ve mükemmel hizmet kalitemiz
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Cards */}
            <div className="space-y-6">
              <div 
                className="why-choose-card-new"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease'
                  }}
                  className="hover-line"
                ></div>
                <div className="flex items-start gap-4">
                  <div 
                    style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">15 Yıllık Deneyim</h3>
                    <p className="text-gray-600 mb-3">Sektörde 15 yıllık deneyimimizle binlerce yatı güvenle taşıdık</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">2500+</span>
                      <span className="text-sm text-gray-500">Başarılı Taşıma</span>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="why-choose-card-new featured"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: 'scale(1.05)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #059669, #10b981)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">%100 Güvenli</h3>
                    <p className="text-gray-600 mb-3">Tam kapsamlı sigorta ve profesyonel ekipmanlarla garantili güvenlik</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">%100</span>
                      <span className="text-sm text-gray-500">Güvenlik Oranı</span>
                    </div>
                  </div>
                </div>
              </div>

              <div 
                className="why-choose-card-new"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f59e0b, #f97316)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Teslimat</h3>
                    <p className="text-gray-600 mb-3">Express ve standart seçeneklerle istediğiniz zamanda teslim</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-orange-600">24/7</span>
                      <span className="text-sm text-gray-500">Hızlı Hizmet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Animated Yacht */}
            <div className="relative flex justify-center items-center">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '8rem',
                  fontWeight: '900',
                  color: 'rgba(59, 130, 246, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'wrap'
                }}
              >
                YACHT
              </div>
              
              <div 
                style={{
                  width: '500px',
                  height: '500px',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 80%),
                    linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: `
                    0 0 0 1px rgba(59, 130, 246, 0.1),
                    0 20px 60px rgba(59, 130, 246, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                {/* Animated Background Circles */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.2)',
                  animation: 'float 6s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '15%',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.2)',
                  animation: 'float 8s ease-in-out infinite reverse'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '60%',
                  left: '20%',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.3)',
                  animation: 'float 5s ease-in-out infinite'
                }}></div>
                <img 
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Yacht-PNG-Image.png" 
                  alt="Animated Yacht" 
                  style={{
                    width: '380px',
                    height: 'auto',
                    animation: 'floatYacht 4s ease-in-out infinite',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3))',
                    zIndex: 3
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '280px',
                    height: '30px',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'shadowPulse 4s ease-in-out infinite'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yacht Transportation Services */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden gif-overlay">
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Yat Taşıma Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her boyut ve tipte yat için özel tasarlanmış taşımacılık çözümleri
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="transport-feature">
                <div className="transport-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Özel Taşıyıcılar</h3>
                  <p className="text-gray-600">Yat boyutlarına özel tasarlanmış hidrolik taşıyıcılar ile güvenli nakliye</p>
                </div>
              </div>
              
              <div className="transport-feature">
                <div className="transport-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hızlı Teslimat</h3>
                  <p className="text-gray-600">Express ve standart taşıma seçenekleri ile esnek teslimat süreleri</p>
                </div>
              </div>
              
              <div className="transport-feature">
                <div className="transport-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sigorta Koruması</h3>
                  <p className="text-gray-600">Kapsamlı sigorta ile yatınızın tam güvence altında taşınması</p>
                </div>
              </div>

              <div className="transport-feature">
                <div className="transport-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Hizmet</h3>
                  <p className="text-gray-600">Lüks yatlarınız için VIP taşıma hizmeti ve özel bakım</p>
                </div>
              </div>
            </div>

            <div className="yacht-transport-visual relative">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '6rem',
                  fontWeight: '900',
                  color: 'rgba(16, 185, 129, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                TRANSPORT
              </div>
              
              <div 
                style={{
                  position: 'relative',
                  background: `
                    radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
                    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 60%),
                    radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 90%),
                    linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))
                  `,
                  borderRadius: '2rem',
                  padding: '4rem 3rem',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 1px rgba(16, 185, 129, 0.1),
                    0 25px 70px rgba(16, 185, 129, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Floating Particles */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '15%',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.6)',
                  animation: 'floatParticle 7s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '70%',
                  right: '20%',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.6)',
                  animation: 'floatParticle 9s ease-in-out infinite 2s'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '25%',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.6)',
                  animation: 'floatParticle 6s ease-in-out infinite 1s'
                }}></div>
                {/* Animated Background Waves */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
                    `,
                    animation: 'waveMotion 8s ease-in-out infinite'
                  }}
                ></div>

                {/* Clean Yacht Image */}
                <img 
                  src="https://www.pngarts.com/files/1/Yacht-Transparent-Images.png" 
                  alt="Yacht Transportation" 
                  style={{
                    width: '420px',
                    height: 'auto',
                    animation: 'gentleFloat 6s ease-in-out infinite',
                    filter: 'drop-shadow(0 20px 50px rgba(59, 130, 246, 0.3))',
                    position: 'relative',
                    zIndex: 3
                  }}
                />

                {/* Floating Particles */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    borderRadius: '50%',
                    animation: 'floatParticle 6s ease-in-out infinite'
                  }}
                ></div>
                <div 
                  style={{
                    position: 'absolute',
                    top: '60%',
                    right: '15%',
                    width: '6px',
                    height: '6px',
                    background: 'linear-gradient(45deg, #10b981, #3b82f6)',
                    borderRadius: '50%',
                    animation: 'floatParticle 8s ease-in-out infinite 2s'
                  }}
                ></div>
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '20%',
                    width: '5px',
                    height: '5px',
                    background: 'linear-gradient(45deg, #8b5cf6, #10b981)',
                    borderRadius: '50%',
                    animation: 'floatParticle 7s ease-in-out infinite 1s'
                  }}
                ></div>

                {/* Enhanced Shadow */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '20px',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'shadowPulse 6s ease-in-out infinite'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Process - Beğenilen Tasarım Tarzında */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden gif-overlay">
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Taşıma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Profesyonel 3 adımda yatınızı güvenle hedefe ulaştırıyoruz
            </p>
          </div>

          {/* Step 1 - Sol Metin, Sağ Büyük Yat */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="step-number-badge">
                <span className="step-number">01</span>
                <span className="step-title">Detaylı Değerlendirme</span>
              </div>
              <div className="space-y-4">
                <div className="process-feature-item">
                  <div className="process-icon blue-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ücretsiz Teknik İnceleme</h3>
                    <p className="text-gray-600">Uzmanlarımız yatınızın teknik özelliklerini detaylı olarak inceliyor</p>
                  </div>
                </div>
                <div className="process-feature-item">
                  <div className="process-icon purple-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Özel Taşıma Planı</h3>
                    <p className="text-gray-600">En uygun taşıma yöntemi ve güzergah belirleniyor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Büyük Transparan Yat */}
            <div className="relative flex justify-center items-center">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '7rem',
                  fontWeight: '900',
                  color: 'rgba(59, 130, 246, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'wrap'
                }}
              >
                STEP 01
        </div>
              
              <div 
                style={{
                  width: '450px',
                  height: '450px',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 55%),
                    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 55%),
                    radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 70%),
                    linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: `
                    0 0 0 2px rgba(59, 130, 246, 0.1),
                    0 25px 70px rgba(59, 130, 246, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.1),
                    0 0 100px rgba(59, 130, 246, 0.2)
                  `,
                  backdropFilter: 'blur(25px)',
                  border: '3px solid rgba(59, 130, 246, 0.3)',
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                {/* Orbiting Elements */}
                <div style={{
                  position: 'absolute',
                  top: '20%',
                  left: '20%',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.3)',
                  animation: 'orbit 10s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '25%',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.4)',
                  animation: 'orbit 8s linear infinite reverse'
                }}></div>
                <img 
                  src="https://villaqrmenu.b-cdn.net/sealive/pngimg.com%20-%20ship_PNG5406.png" 
                  alt="Yacht Assessment" 
                  style={{
                    width: '320px',
                    height: 'auto',
                    animation: 'floatYacht 4s ease-in-out infinite',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3))',
                    zIndex: 3
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '250px',
                    height: '30px',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'shadowPulse 4s ease-in-out infinite'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Step 2 - Sağ Metin, Sol Büyük Yat */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Sol Taraf - Büyük Transparan Yat */}
            <div className="relative flex justify-center items-center order-2 lg:order-1">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '7rem',
                  fontWeight: '900',
                  color: 'rgba(16, 185, 129, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'wrap'
                }}
              >
                STEP 02
              </div>
              
              <div 
                style={{
                  width: '450px',
                  height: '450px',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.5) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 20% 70%, rgba(34, 197, 94, 0.3) 0%, transparent 60%),
                    linear-gradient(120deg, rgba(16, 185, 129, 0.3), rgba(59, 130, 246, 0.2))
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: `
                    0 0 0 2px rgba(16, 185, 129, 0.2),
                    0 30px 80px rgba(16, 185, 129, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.15),
                    0 0 120px rgba(16, 185, 129, 0.3)
                  `,
                  backdropFilter: 'blur(30px)',
                  border: '3px solid rgba(16, 185, 129, 0.4)',
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                {/* Spiral Animation Elements */}
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  animation: 'rotateBackground 15s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '30%',
                  right: '10%',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.4)',
                  animation: 'orbit 12s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '15%',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.5)',
                  animation: 'floatParticle 8s ease-in-out infinite'
                }}></div>
                <img 
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Yacht-PNG-Image.png" 
                  alt="Yacht Preparation" 
                  style={{
                    width: '320px',
                    height: 'auto',
                    animation: 'floatYacht 4s ease-in-out infinite 1s',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3))',
                    zIndex: 3
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '250px',
                    height: '30px',
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'shadowPulse 4s ease-in-out infinite 1s'
                  }}
                ></div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="step-number-badge">
                <span className="step-number green-bg">02</span>
                <span className="step-title">Profesyonel Hazırlık</span>
              </div>
              <div className="space-y-4">
                <div className="process-feature-item">
                  <div className="process-icon green-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Özel Ekipman Hazırlığı</h3>
                    <p className="text-gray-600">Yat boyutlarına özel taşıyıcılar ve güvenlik ekipmanları</p>
                  </div>
                </div>
                <div className="process-feature-item">
                  <div className="process-icon orange-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M12 15L17 10H7L12 15Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Güvenlik Protokolü</h3>
                    <p className="text-gray-600">Tüm güvenlik önlemleri alınır ve optimal rota planlanır</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Orta Büyük Yat + Metin */}
          <div className="text-center">
            <div className="step-number-badge justify-center mb-8">
              <span className="step-number purple-bg">03</span>
              <span className="step-title">Güvenli Teslimat</span>
            </div>
            
            <div className="relative flex justify-center items-center mb-8">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '7rem',
                  fontWeight: '900',
                  color: 'rgba(139, 92, 246, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'wrap'
                }}
              >
                STEP<br/>
                03
              </div>
              
              <div 
                style={{
                  width: '500px',
                  height: '500px',
                  borderRadius: '50%',
                  background: `
                    radial-gradient(circle at 40% 30%, rgba(139, 92, 246, 0.5) 0%, transparent 45%),
                    radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 55%),
                    conic-gradient(from 0deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.3))
                  `,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  boxShadow: `
                    0 0 0 3px rgba(139, 92, 246, 0.2),
                    0 35px 90px rgba(139, 92, 246, 0.6),
                    inset 0 3px 0 rgba(255, 255, 255, 0.2),
                    0 0 150px rgba(236, 72, 153, 0.4)
                  `,
                  backdropFilter: 'blur(35px)',
                  border: '4px solid rgba(139, 92, 246, 0.4)',
                  zIndex: 1,
                  overflow: 'hidden'
                }}
              >
                {/* Premium Animation Effects */}
                <div style={{
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  border: '2px dashed rgba(236, 72, 153, 0.3)',
                  animation: 'rotateBackground 20s linear infinite reverse'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '15%',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.4)',
                  animation: 'orbit 14s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '20%',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(236, 72, 153, 0.5)',
                  animation: 'orbit 10s linear infinite reverse'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '80%',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.6)',
                  animation: 'floatParticle 6s ease-in-out infinite 1.5s'
                }}></div>
                <img 
                  src="https://www.pngarts.com/files/1/Yacht-Transparent-Images.png" 
                  alt="Yacht Delivery" 
                  style={{
                    width: '350px',
                    height: 'auto',
                    animation: 'floatYacht 4s ease-in-out infinite 2s',
                    filter: 'drop-shadow(0 15px 40px rgba(0, 0, 0, 0.3))',
                    zIndex: 3
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '280px',
                    height: '30px',
                    background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'shadowPulse 4s ease-in-out infinite 2s'
                  }}
                ></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="process-feature-item">
                <div className="process-icon purple-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Canlı Takip Sistemi</h3>
                  <p className="text-gray-600">Yatınızın konumunu anlık olarak takip edebilirsiniz</p>
                </div>
              </div>
              <div className="process-feature-item">
                <div className="process-icon red-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zamanında Teslimat</h3>
                  <p className="text-gray-600">Belirlenen sürede mükemmel durumda teslim edilir</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Background Yacht */}
          <div 
            style={{
              position: 'absolute',
              top: '10%',
              left: '-200px',
              width: '300px',
              height: 'auto',
              animation: 'crossScreen 35s linear infinite',
              opacity: 0.2,
              zIndex: 1
            }}
          >
            <img 
              src="" 
              alt="Moving Yacht" 
              style={{
                width: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.2))'
              }}
            />
          </div>
        </div>
      </section>

      {/* Yacht Types - Beğenilen Tasarım Tarzında */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden gif-overlay">
        <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Taşıdığımız Yat Tipleri
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Küçük yelkenlilerden mega yatlara kadar her türlü deniz aracını güvenle taşıyoruz
            </p>
          </div>

          {/* Mega Yachts - Sol Metin, Sağ Büyük Resim */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="yacht-type-badge">
                <span className="yacht-type-icon blue-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="yacht-type-title">Mega Yatlar</span>
              </div>
              
              <div className="space-y-4">
                <div className="yacht-spec-item">
                  <div className="spec-icon blue-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">40-100+ Metre</h3>
                    <p className="text-gray-600">Ultra lüks mega yatlar için özel taşıma çözümleri</p>
                  </div>
                </div>
                
                <div className="yacht-spec-item">
                  <div className="spec-icon purple-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">VIP Hizmet</h3>
                    <p className="text-gray-600">Özel bakım ve koruma ile premium taşımacılık</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - Büyük Yat Görseli */}
            <div className="yacht-visual-container">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '6rem',
                  fontWeight: '900',
                  color: 'rgba(59, 130, 246, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                MEGA<br/>
                YACHT
              </div>
              
              <div 
                style={{
                  position: 'relative',
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 50% 10%, rgba(99, 102, 241, 0.2) 0%, transparent 70%),
                    linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(139, 92, 246, 0.25))
                  `,
                  borderRadius: '2rem',
                  padding: '3rem',
                  backdropFilter: 'blur(30px)',
                  border: '3px solid rgba(59, 130, 246, 0.3)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 1px rgba(59, 130, 246, 0.1),
                    0 30px 80px rgba(59, 130, 246, 0.4),
                    inset 0 2px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Luxury Effects */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '10%',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.4)',
                  animation: 'floatParticle 8s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  left: '15%',
                  width: '25px',
                  height: '25px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.4)',
                  animation: 'floatParticle 6s ease-in-out infinite 2s'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '5%',
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: 'rgba(99, 102, 241, 0.5)',
                  animation: 'orbit 12s linear infinite'
                }}></div>
                <img 
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Yacht-PNG-Image.png" 
                  alt="Mega Yacht" 
                  style={{
                    width: '400px',
                    height: 'auto',
                    animation: 'gentleFloat 6s ease-in-out infinite',
                    filter: 'drop-shadow(0 20px 50px rgba(59, 130, 246, 0.3))',
                    zIndex: 3
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sport Yachts - Sağ Metin, Sol Büyük Resim */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Sol Taraf - Büyük Yat Görseli */}
            <div className="yacht-visual-container order-2 lg:order-1">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '6rem',
                  fontWeight: '900',
                  color: 'rgba(16, 185, 129, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                SPORT<br/>
                YACHT
              </div>
              
              <div 
                style={{
                  position: 'relative',
                  background: `
                    radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.5) 0%, transparent 45%),
                    radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.4) 0%, transparent 50%),
                    radial-gradient(circle at 90% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%),
                    linear-gradient(120deg, rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.2))
                  `,
                  borderRadius: '2rem',
                  padding: '3rem',
                  backdropFilter: 'blur(30px)',
                  border: '3px solid rgba(16, 185, 129, 0.4)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 1px rgba(16, 185, 129, 0.15),
                    0 30px 80px rgba(16, 185, 129, 0.5),
                    inset 0 2px 0 rgba(255, 255, 255, 0.15)
                  `
                }}
              >
                {/* Sport Yacht Effects */}
                <div style={{
                  position: 'absolute',
                  top: '15%',
                  left: '10%',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.5)',
                  animation: 'floatParticle 7s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '15%',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.6)',
                  animation: 'orbit 10s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '60%',
                  right: '5%',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.4)',
                  animation: 'floatParticle 5s ease-in-out infinite 1s'
                }}></div>
                <img 
                  src="https://villaqrmenu.b-cdn.net/sealive/pngimg.com%20-%20ship_PNG5406.png" 
                  alt="Sport Yacht" 
                  style={{
                    width: '400px',
                    height: 'auto',
                    animation: 'gentleFloat 6s ease-in-out infinite 1s',
                    filter: 'drop-shadow(0 20px 50px rgba(16, 185, 129, 0.3))',
                    zIndex: 3
                  }}
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="yacht-type-badge">
                <span className="yacht-type-icon green-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                </span>
                <span className="yacht-type-title">Spor Yatları</span>
              </div>
              
              <div className="space-y-4">
                <div className="yacht-spec-item">
                  <div className="spec-icon green-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Hızlı & Çevik</h3>
                    <p className="text-gray-600">Sportif motor yatları için dinamik taşıma</p>
                  </div>
                </div>
                
                <div className="yacht-spec-item">
                  <div className="spec-icon orange-gradient">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Express taşıma seçenekleri ile hızlı çözümler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sailing Yachts - Orta Büyük Resim */}
          <div className="text-center">
            <div className="yacht-type-badge justify-center mb-8">
              <span className="yacht-type-icon purple-gradient">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <path d="M3 18H21L19 6H5L3 18Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2V6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span className="yacht-type-title">Yelken Yatları</span>
            </div>
            
            <div className="yacht-visual-container mb-8">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '6rem',
                  fontWeight: '900',
                  color: 'rgba(139, 92, 246, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                SAILING<br/>
                YACHT
              </div>
              
              <div 
                style={{
                  position: 'relative',
                  background: `
                    radial-gradient(circle at 35% 25%, rgba(139, 92, 246, 0.5) 0%, transparent 40%),
                    radial-gradient(circle at 65% 75%, rgba(236, 72, 153, 0.4) 0%, transparent 45%),
                    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
                    conic-gradient(from 45deg, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.3))
                  `,
                  borderRadius: '2rem',
                  padding: '4rem 3rem',
                  backdropFilter: 'blur(35px)',
                  border: '4px solid rgba(139, 92, 246, 0.4)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  maxWidth: '600px',
                  margin: '0 auto',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 2px rgba(139, 92, 246, 0.2),
                    0 35px 90px rgba(139, 92, 246, 0.6),
                    inset 0 3px 0 rgba(255, 255, 255, 0.2)
                  `
                }}
              >
                {/* Sailing Yacht Premium Effects */}
                <div style={{
                  position: 'absolute',
                  width: '95%',
                  height: '95%',
                  borderRadius: '2rem',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                  animation: 'rotateBackground 25s linear infinite',
                  top: '2.5%',
                  left: '2.5%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '12%',
                  left: '8%',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'rgba(139, 92, 246, 0.5)',
                  animation: 'orbit 16s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '10%',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(236, 72, 153, 0.6)',
                  animation: 'floatParticle 7s ease-in-out infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '70%',
                  left: '15%',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(168, 85, 247, 0.5)',
                  animation: 'orbit 12s linear infinite reverse'
                }}></div>
                <img 
                  src="https://www.pngall.com/wp-content/uploads/2016/04/Yacht-PNG-Image.png" 
                  alt="Sailing Yacht" 
                  style={{
                    width: '450px',
                    height: 'auto',
                    animation: 'gentleFloat 6s ease-in-out infinite 2s',
                    filter: 'drop-shadow(0 20px 50px rgba(139, 92, 246, 0.3))',
                    zIndex: 3
                  }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="yacht-spec-item">
                <div className="spec-icon purple-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M3 18H21L19 6H5L3 18Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Klasik & Modern</h3>
                  <p className="text-gray-600">Geleneksel ve modern yelkenli yatlar</p>
                </div>
              </div>
              <div className="yacht-spec-item">
                <div className="spec-icon pink-gradient">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Özel Koruma</h3>
                  <p className="text-gray-600">Yelken ve direklere özel koruma sistemleri</p>
                </div>
              </div>
            </div>
          </div>

          {/* Yat Taşıma Görseli */}
          <div className="mt-20 text-center">
            <div className="yacht-visual-container">
              {/* Background Text Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '5rem',
                  fontWeight: '900',
                  color: 'rgba(16, 185, 129, 0.3)',
                  zIndex: 2,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                PROFESSIONAL<br/>
                TRANSPORT
              </div>
              
              <div 
                style={{
                  position: 'relative',
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.6) 0%, transparent 40%),
                    radial-gradient(circle at 70% 20%, rgba(34, 197, 94, 0.5) 0%, transparent 45%),
                    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.2))
                  `,
                  borderRadius: '2rem',
                  padding: '3rem',
                  backdropFilter: 'blur(40px)',
                  border: '4px solid rgba(16, 185, 129, 0.5)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  maxWidth: '800px',
                  margin: '0 auto',
                  zIndex: 1,
                  boxShadow: `
                    0 0 0 2px rgba(16, 185, 129, 0.2),
                    0 40px 100px rgba(16, 185, 129, 0.7),
                    inset 0 3px 0 rgba(255, 255, 255, 0.25),
                    0 0 200px rgba(34, 197, 94, 0.3)
                  `
                }}
              >
                {/* Professional Transport Ultimate Effects */}
                <div style={{
                  position: 'absolute',
                  width: '98%',
                  height: '98%',
                  borderRadius: '2rem',
                  border: '2px solid rgba(34, 197, 94, 0.3)',
                  animation: 'rotateBackground 30s linear infinite',
                  top: '1%',
                  left: '1%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  width: '85%',
                  height: '85%',
                  borderRadius: '2rem',
                  border: '1px dashed rgba(59, 130, 246, 0.2)',
                  animation: 'rotateBackground 20s linear infinite reverse',
                  top: '7.5%',
                  left: '7.5%'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  left: '5%',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.6)',
                  animation: 'orbit 18s linear infinite'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '12%',
                  right: '8%',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.7)',
                  animation: 'orbit 14s linear infinite reverse'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '60%',
                  right: '15%',
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  background: 'rgba(59, 130, 246, 0.5)',
                  animation: 'floatParticle 8s ease-in-out infinite 1s'
                }}></div>
                <div style={{
                  position: 'absolute',
                  top: '25%',
                  left: '80%',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.4)',
                  animation: 'floatParticle 6s ease-in-out infinite 2s'
                }}></div>
                <img 
                  src="https://villaqrmenu.b-cdn.net/sealive/pngtree-speed-boat-yacht-ship-on-transparent-background-png-image_13882838-Photoroom.png" 
                  alt="Yacht Transportation" 
                  style={{
                    width: '600px',
                    height: 'auto',
                    animation: 'gentleFloat 8s ease-in-out infinite',
                    filter: 'drop-shadow(0 20px 50px rgba(16, 185, 129, 0.3))',
                    zIndex: 3
                  }}
                />
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profesyonel Taşımacılık</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                En gelişmiş taşıma ekipmanları ve uzman kadromuz ile yatlarınızı güvenle hedefe ulaştırıyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white relative gif-overlay">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Binlerce memnun müşterimizin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="testimonial-text">
                  "40 metrelik yatımı Monaco'dan İstanbul'a taşıttım. Profesyonel ekip, 
                  zamanında teslimat ve kusursuz hizmet. Kesinlikle tavsiye ederim."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="font-bold">Ahmet Yılmaz</h4>
                    <p className="text-gray-600">Yat Sahibi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card featured">
              <div className="testimonial-content">
                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="testimonial-text">
                  "SeaLive ile çalışmak harika bir deneyimdi. Yatım güvenli ellerde olduğunu 
                  bilmek çok değerliydi. Her aşamada bilgilendirilme mükemmeldi."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="font-bold">Marina Demir</h4>
                    <p className="text-gray-600">Luxury Yacht Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="testimonial-text">
                  "Express taşıma hizmeti sayesinde yatım planladığımdan erken teslim edildi. 
                  Fiyat performans açısından en iyi seçenek."
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="font-bold">Can Özkan</h4>
                    <p className="text-gray-600">Sailing Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white gif-overlay">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Bizimle İletişime Geçin</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Yat taşıma hizmetlerimiz hakkında detaylı bilgi almak ve 
            ücretsiz fiyat teklifi için bize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Telefon: +90 555 123 4567
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              WhatsApp ile İletişim
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              E-posta Gönder
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 gif-overlay">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SeaLive Yacht Transport</h3>
              <p className="text-gray-400">
                Profesyonel yat taşımacılığında güvenilir çözüm ortağınız.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Yat Taşımacılığı</li>
                <li>Deniz Ulaşımı</li>
                <li>Lojistik Hizmetleri</li>
                <li>Sigorta Hizmetleri</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Hakkımızda</li>
                <li>Referanslar</li>
                <li>Kariyer</li>
                <li>İletişim</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@sealive.com</p>
                <p>📞 +90 555 123 4567</p>
                <p>📍 İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SeaLive Yacht Transport. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
