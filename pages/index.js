import Hero from '../components/Hero'
import Story from '../components/Story'
import Timeline from '../components/Timeline'
import Venue from '../components/Venue'
import Gallery from '../components/Gallery'
import RSVP from '../components/RSVP'
import MusicControl from '../components/MusicControl'

export default function Home(){
  return (
    <div>
      <MusicControl />
      <Hero />
      <Story />
      <Timeline />
      <Venue />
      <Gallery />
      <RSVP />
      <footer>© Lan Anh & Tùng Lâm — 28/12/2025</footer>
    </div>
  )
}
