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
            width: "260px",
            height: "260px",
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 0 20px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: "#b85c5c",
              fontSize: "20px",
              marginBottom: "5px",
            }}
          >
            ❤️ Ngày trọng đại
          </h3>
          <h1
            style={{
              color: "#b85c5c",
              fontSize: "58px",
              margin: "10px 0",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            28
          </h1>
          <p style={{ color: "#7a6060" }}>Tháng 12 / 2025</p>
        </div>
      </motion.div>
    </section>
  );
}
