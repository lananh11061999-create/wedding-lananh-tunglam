const events = [
  { time: '12/2022', desc: 'Quen nhau 💫' },
  { time: '08/2023', desc: 'Yêu nhau 💕' },
  { time: '10/2023', desc: 'Yêu xa ✈️' },
  { time: '09/2025', desc: 'Yêu gần lại 🏡' },
  { time: '12/2025', desc: 'Đám cưới 💍' },
]

export default function Timeline(){
  return (
    <section className="section" data-aos="fade-up">
      <div className="container">
        <h2 style={{textAlign:'center', color:'var(--main-1)'}}>Hành trình</h2>
        <div style={{maxWidth:800, margin:'20px auto'}}>
          {events.map((e,i)=>(
            <div key={i} style={{display:'flex', gap:12, marginBottom:14}}>
              <div style={{width:110, fontWeight:700}}>{e.time}</div>
              <div style={{flex:1}}>{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
