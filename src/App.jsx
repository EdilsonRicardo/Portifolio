import './App.css'
import Navbar from './components/Navbar'
import Nome from './components/Nome'
import About from './components/About'
import Skills from './components/Skills'
import Portifolio from './components/Portifolio'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Nome />
      <About />
      <Skills />
      <Portifolio />
    </div>
  )
}

export default App
