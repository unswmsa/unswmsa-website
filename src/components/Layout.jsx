import { Outlet, Link } from 'react-router-dom'

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

      <footer className="footer">
        <p>will add in footer deets</p>
      </footer>
    </div>
  )
}

export default Layout