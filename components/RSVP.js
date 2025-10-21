import { motion } from "framer-motion";

export default function RSVP(){
  return (
    <section className="section rsvp" style={{ 
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      padding: '80px 20px'
    }}>
      <div className="container" style={{
        maxWidth: '600px', 
        margin: '0 auto', 
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Decorative borders */}
        <div style={{
          position: 'absolute',
          left: '-20px',
          top: '0',
          width: '8px',
          height: '100%',
          background: '#8B0000',
          borderRadius: '4px 0 0 4px'
        }}></div>
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '0',
          width: '8px',
          height: '100%',
          background: '#8B0000',
          borderRadius: '0 4px 4px 0'
        }}></div>

        {/* Decorative corners */}
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: '20px',
          height: '20px',
          background: '#8B0000',
          borderRadius: '50% 0 50% 0'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '20px',
          height: '20px',
          background: '#8B0000',
          borderRadius: '0 50% 0 50%'
        }}></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <h2 style={{
            color: '#333',
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Xác nhận tham dự
          </h2>

          {/* Double Happiness Symbol */}
          <div style={{
            fontSize: '4rem',
            color: '#8B0000',
            marginBottom: '40px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            囍
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            border: '1px solid rgba(139, 0, 0, 0.1)'
          }}
        >
          <form action="https://getform.io/f/your-form-endpoint" method="POST">
            {/* Name Input */}
            <div style={{ marginBottom: '25px', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                color: '#333',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '8px'
              }}>
                Họ và tên
              </label>
              <input 
                name="name" 
                placeholder="Nhập tên của bạn" 
                required 
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#8B0000'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>

            {/* Attendance Question */}
            <div style={{ marginBottom: '25px', textAlign: 'left' }}>
              <label style={{
                display: 'block',
                color: '#333',
                fontSize: '1rem',
                fontWeight: '500',
                marginBottom: '15px'
              }}>
                Bạn sẽ tham dự chứ?
              </label>
              
              {/* Radio Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '12px',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s ease'
                }}>
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="yes" 
                    defaultChecked
                    style={{
                      marginRight: '12px',
                      width: '18px',
                      height: '18px',
                      accentColor: '#8B0000'
                    }}
                  />
                  <span style={{ color: '#333', fontSize: '1rem' }}>
                    Có, tôi sẽ tham dự
                  </span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '12px',
                  borderRadius: '8px',
                  transition: 'background-color 0.3s ease'
                }}>
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="no"
                    style={{
                      marginRight: '12px',
                      width: '18px',
                      height: '18px',
                      accentColor: '#8B0000'
                    }}
                  />
                  <span style={{ color: '#666', fontSize: '1rem' }}>
                    Tôi bận, rất tiếc không thể tham dự
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              style={{
                width: '100%',
                background: '#8B0000',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '10px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(139, 0, 0, 0.3)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#A00000';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(139, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#8B0000';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(139, 0, 0, 0.3)';
              }}
            >
              Gửi xác nhận
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
