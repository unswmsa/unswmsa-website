import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Resources from './pages/Resources.jsx'
import Sponsors from './pages/Sponsors.jsx'
import GetInvolved from './pages/GetInvolved.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App