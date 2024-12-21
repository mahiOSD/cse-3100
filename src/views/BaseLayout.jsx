import { Link, Outlet } from 'react-router-dom';
import './BaseLayout.css';
const BaseLayout = () => {
  return (
    <div className="layout">
      <header className="d-flex align-items-center header-bg p-3">
  <h1>
    <Link className="text-decoration-none text-dark" to="/">
      Purrfect Adoption
    </Link>
  </h1>
  <div className="flex-grow-1"></div>
  <nav>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/available-cats">
          Available Cats
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact-us">
          Contact Us
        </Link>
      </li>
    </ul>
  </nav>
</header>

      <main id="content" className="container my-4">
        <Outlet />
      </main>
      <footer className="bg-light text-center p-3">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
