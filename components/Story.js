import { motion } from "framer-motion";

export default function Story(){
  return (
    <section className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{
            color: '#8B0000',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Câu chuyện tình yêu
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #FF6B6B, #8B0000)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Timeline Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #FF6B6B, #FF8E8E)'
            }}></div>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>💫</div>
            <h3 style={{
              color: '#8B0000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center'
            }}>Gặp gỡ</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Tháng 5/2023, chúng mình gặp nhau trong một buổi hẹn hò định mệnh. 
              Từ cái nhìn đầu tiên, cả hai đều biết rằng đây chính là người mình đang tìm kiếm.
            </p>
          </motion.div>

          {/* Timeline Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #FF8E8E, #FFB6B6)'
            }}></div>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>💕</div>
            <h3 style={{
              color: '#8B0000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center'
            }}>Yêu nhau</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Tháng 8/2023, chúng mình chính thức bắt đầu hành trình yêu đương. 
              Những ngày đầu ngọt ngào và đầy hạnh phúc đã đánh dấu khởi đầu của tình yêu.
            </p>
          </motion.div>

          {/* Timeline Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #FFB6B6, #FFD6D6)'
            }}></div>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>✈️</div>
            <h3 style={{
              color: '#8B0000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center'
            }}>Yêu xa</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Tháng 10/2023, chúng mình phải đối mặt với thử thách yêu xa. 
              Những cuộc gọi video, tin nhắn và những chuyến bay đã giúp chúng mình vượt qua khoảng cách.
            </p>
          </motion.div>

          {/* Timeline Item 4 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #FFD6D6, #FFE6E6)'
            }}></div>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>🏡</div>
            <h3 style={{
              color: '#8B0000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center'
            }}>Về chung nhà</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Tháng 9/2025, chúng mình quyết định về chung một nhà. 
              Cuộc sống cùng nhau đã mang lại những niềm vui và hạnh phúc mới.
            </p>
          </motion.div>

          {/* Timeline Item 5 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
              gridColumn: 'span 2',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #8B0000, #FF6B6B)'
            }}></div>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              textAlign: 'center'
            }}>💍</div>
            <h3 style={{
              color: '#8B0000',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '15px',
              textAlign: 'center'
            }}>Đám cưới</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6',
              textAlign: 'center',
              fontSize: '1.1rem'
            }}>
              Tháng 12/2025, chúng mình sẽ chính thức trở thành vợ chồng. 
              Đây là ngày đặc biệt nhất trong cuộc đời, khi tình yêu được kết trái bằng một đám cưới trọn vẹn. 
              Chúng mình hạnh phúc mời bạn cùng chung vui trong ngày trọng đại này.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
