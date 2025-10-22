import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero(){
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const weddingDate = new Date('2025-12-28');
    const diffTime = weddingDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) {
      setCurrentDate(`${diffDays} ngày nữa`);
    } else if (diffDays === 0) {
      setCurrentDate('Hôm nay');
    } else {
      setCurrentDate('Đã qua');
    }
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '60px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '20%',
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        animation: 'float 5s ease-in-out infinite'
      }}></div>

      {/* Main Content */}
      <div style={{
        textAlign: 'center',
        color: 'white',
        zIndex: 2,
        position: 'relative',
        maxWidth: '800px',
        padding: '0 20px'
      }}>
        {/* Wedding Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            padding: '12px 24px',
            borderRadius: '25px',
            display: 'inline-block',
            marginBottom: '30px',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <span style={{
            fontSize: '1rem',
            fontWeight: '500',
            letterSpacing: '1px'
          }}>
            {currentDate}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif",
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}
        >
          Lan Anh & Tùng Lâm
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            fontWeight: '300',
            marginBottom: '40px',
            opacity: 0.9,
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px auto'
          }}
        >
          Trân trọng kính mời bạn đến dự lễ thành hôn của chúng tôi
        </motion.p>

        {/* Wedding Date */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '30px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '40px'
          }}
        >
          <div style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '600',
            marginBottom: '10px',
            fontFamily: "'Playfair Display', serif"
          }}>
            28.12.2025
          </div>
          <div style={{
            fontSize: '1.2rem',
            opacity: 0.8
          }}>
            Thứ Bảy
          </div>
        </motion.div>

        {/* Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '40px'
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            style={{
              fontSize: '2rem',
              color: '#FFB6C1'
            }}
          >
            💕
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 1
            }}
            style={{
              fontSize: '2rem',
              color: '#FFB6C1'
            }}
          >
            💖
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2
            }}
            style={{
              fontSize: '2rem',
              color: '#FFB6C1'
            }}
          >
            💕
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center'
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: '1.5rem',
              opacity: 0.7,
              cursor: 'pointer'
            }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
          >
            ⬇️
          </motion.div>
          <div style={{
            fontSize: '0.8rem',
            opacity: 0.6,
            marginTop: '5px'
          }}>
            Cuộn xuống
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}
