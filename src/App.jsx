import './App.css'
import Navbar from './components/Navbar'
import Nome from './components/Nome'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Nome />
      <About />
      <Skills />
    </div>
  )
}

export default App
