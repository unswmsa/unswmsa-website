import { Outlet, Link } from 'react-router-dom'
import Footer from './Footer'

// structure & design tbd
function Layout() {
  return (
    <div className="site">
      <header className="nav">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="UNSW MSA" height="100" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout