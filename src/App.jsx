import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import Newsletter from "./components/Newsletter"
import { Planes } from "./components/Planes"
import { Training } from "./components/Training"

function App() {

  return (
    <div>
      <Header/>
      <AboutUs/>
      <Planes/>
      <Training/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
