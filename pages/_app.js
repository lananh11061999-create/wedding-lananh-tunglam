import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration:700, once:true })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
