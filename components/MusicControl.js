import { useEffect, useState, useRef } from 'react'

export default function MusicControl(){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // try autoplay; may be blocked by some browsers, but we request play on load
    if (audioRef.current) {
      const p = audioRef.current.play()
      if (p !== undefined) {
        p.then(()=>setPlaying(true)).catch(()=>{})
      }
    }
  }, [])

  const toggle = () => {
    if(!audioRef.current) return
    if(playing){ audioRef.current.pause(); setPlaying(false) }
    else { audioRef.current.play(); setPlaying(true) }
  }

  return (
    <div className="music-control">
      <audio ref={audioRef} src="/music/musictheme.wav" loop />
      <button className="music-btn" onClick={toggle}>
        {playing ? 'Tắt nhạc 🔇' : 'Mở nhạc 🔊'}
      </button>
    </div>
  )
}
