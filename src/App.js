import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Work from './components/works/Work'

import './app.scss'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
