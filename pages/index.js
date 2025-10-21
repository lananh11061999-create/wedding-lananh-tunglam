import Hero from '../components/Hero'
import Story from '../components/Story'
import Venue from '../components/Venue'
import Gallery from '../components/Gallery'
import RSVP from '../components/RSVP'
import MusicEmbed from '../components/MusicEmbed';

export default function Home(){
  return (
    <div>
      <Hero />
      <MusicEmbed />
      <Story />
      <Venue />
      <Gallery />
      <RSVP />
            <p style={{maxWidth:800, margin:'18px auto 0 auto', textAlign:'center', color:'#5a4040'}}>
         Chúng mình sẽ hạnh phúc hơn khi  dành thời gian đến chứng kiến khoảnh khắc tụi mình chính thức về chung một nhà.
        </p>
      <footer>© Lan Anh & Tùng Lâm — 28/12/2025</footer>
    </div>
  )
}
