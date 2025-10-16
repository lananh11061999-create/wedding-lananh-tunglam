const imgs = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg'
]

export default function Gallery(){
  return (
    <section className="section" data-aos="fade-up">
      <div className="container">
        <h2 style={{textAlign:'center', color:'var(--main-1)'}}>Khoảnh khắc</h2>
        <div className="grid" style={{marginTop:18}}>
          {imgs.map((s,i)=>(
            <div key={i}>
              <img src={s} alt={'p'+i} style={{width:'100%', borderRadius:10}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
