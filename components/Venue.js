import { motion } from "framer-motion";

export default function Venue() {
  return (
    <section
      style={{
        background: "#f9f5f2",
        padding: "60px 20px",
        textAlign: "center",
        borderTop: "1px solid #e4d7d0",
      }}
      id="events"
    >
      <h2
        style={{
          color: "#b85c5c",
          fontFamily: "'Playfair Display', serif",
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        💍 Sự kiện cưới
      </h2>

      <p style={{ color: "#7a6060", marginBottom: "50px" }}>
        Cùng chung vui với Lan Anh & Tùng Lâm trong những khoảnh khắc đáng nhớ 💕
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* --- Tiệc cưới nhà gái --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            padding: "30px 25px",
            width: "320px",
          }}
        >
          <h3
            style={{
              color: "#b85c5c",
              fontSize: "22px",
              marginBottom: "10px",
            }}
          >
            🎀 Tiệc cưới nhà gái
          </h3>
          <p style={{ fontSize: "15px", color: "#7a6060", lineHeight: "1.6" }}>
            📅 <b>17:00 – Thứ Bảy, ngày 27/12/2025</b><br />
            📍 Số 06, ngõ Đoàn Kết, thôn Địch Thượng, xã Phương Đình, Đan Phượng
          </p>
        </motion.div>

        {/* --- Lễ thành hôn nhà trai --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            padding: "30px 25px",
            width: "320px",
          }}
        >
          <h3
            style={{
              color: "#b85c5c",
              fontSize: "22px",
              marginBottom: "10px",
            }}
          >
            💍 Lễ thành hôn nhà trai
          </h3>
          <p style={{ fontSize: "15px", color: "#7a6060", lineHeight: "1.6" }}>
            📅 <b>12:00 – Chủ nhật, ngày 28/12/2025</b><br />
            📍 Thôn Đông, xã Đắc Sở, huyện Hoài Đức
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "320px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 0 20px rgba(0,0,0,0.1)",
            padding: "20px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {/* Calendar Header */}
          <div
            style={{
              background: "#8B0000",
              color: "white",
              padding: "15px",
              borderRadius: "15px 15px 0 0",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              margin: "-20px -20px 20px -20px",
            }}
          >
            10.2025
          </div>

          {/* Days of week */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <div
                key={day}
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#666",
                  padding: "5px",
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
            }}
          >
            {/* Empty cells for days before Oct 1 */}
            {Array.from({ length: 1 }, (_, i) => (
              <div key={`empty-${i}`} style={{ height: "40px" }}></div>
            ))}
            
            {/* October days */}
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const isSpecialDay = day === 26; // Highlight day 26
              
              return (
                <div
                  key={day}
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: isSpecialDay ? "600" : "400",
                    color: isSpecialDay ? "#8B0000" : "#333",
                    position: "relative",
                    borderRadius: "8px",
                    background: isSpecialDay ? "rgba(139, 0, 0, 0.1)" : "transparent",
                  }}
                >
                  {day}
                  {isSpecialDay && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        width: "16px",
                        height: "16px",
                        background: "#FF6B6B",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                      }}
                    >
                      ❤️
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Watermark */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "80px",
              fontWeight: "900",
              color: "rgba(0,0,0,0.05)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            2025
          </div>
        </div>
      </motion.div>
    </section>
  );
}
