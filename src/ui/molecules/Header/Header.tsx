import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/generator">Generator</Link></li>
        <li><Link to="/auth-info">Auth info</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <hr />
    </header>
  );
}

export { Header };
