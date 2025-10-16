export default function Venue(){
  return (
    <section className="section" data-aos="fade-up">
      <div className="container">
        <h2 style={{textAlign:'center', color:'var(--main-1)'}}>Địa điểm</h2>
        <p style={{textAlign:'center', marginBottom:12}}>Đắc Sở, Hoài Đức</p>
        <div style={{maxWidth:900, margin:'0 auto'}}>
          <iframe
            src="https://www.google.com/maps?q=Đắc+Sở,+Hoài+Đức&output=embed"
            width="100%"
            height="420"
            style={{border:0}}
            loading="lazy"
            title="map"
          />
        </div>
      </div>
    </section>
  )
}
