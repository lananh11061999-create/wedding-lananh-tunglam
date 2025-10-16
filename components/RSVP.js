export default function RSVP(){
  return (
    <section className="section rsvp" data-aos="fade-up">
      <div className="container" style={{maxWidth:700, margin:'0 auto', textAlign:'center'}}>
        <h2 style={{color:'var(--main-1)'}}>Xác nhận tham dự (RSVP)</h2>

        {/* -- Simple working form (posts to getform.io - replace endpoint with your own) -- */}
        <form action="https://getform.io/f/your-form-endpoint" method="POST" style={{marginTop:18, marginBottom:24}}>
          <input name="name" placeholder="Tên bạn" required />
          <input name="guests" placeholder="Số khách" required />
          <textarea name="note" rows="4" placeholder="Lời nhắn (nếu có)"></textarea>
          <button style={{background:'var(--main-1)', color:'var(--main-2)', padding:'12px 18px', borderRadius:8}}>Gửi</button>
        </form>

        <p style={{color:'#6b5050'}}>Hoặc chèn Google Form bằng cách dán mã embed của Google Form ở chỗ <em>Google Form (bên dưới)</em>.</p>

        {/* -- Google Form placeholder iframe -- replace src with your Google Form embed link -- */}
        <div style={{marginTop:18}}>
          <h3 style={{marginBottom:8}}>Google Form (nếu bạn muốn dùng)</h3>
          <iframe
            title="google-form-placeholder"
            src="about:blank"
            style={{width:'100%', height:520, border:'1px dashed #ccc'}}
          />
          <p style={{fontSize:13, color:'#7a6060', marginTop:8}}>
  Thay đường dẫn <code>src</code> trong iframe bằng mã embed Google Form của bạn 
  (từ Google Forms → Send → {'<>'} Embed).
         </p>

        </div>
      </div>
    </section>
  )
}
