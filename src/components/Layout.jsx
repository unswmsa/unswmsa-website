import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import background from '../assets/shared/background.png';

const layoutBackgroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'repeat',
  backgroundSize: '300px',
};

function Layout() {
  return (
    <div className="site" style={layoutBackgroundStyle}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;