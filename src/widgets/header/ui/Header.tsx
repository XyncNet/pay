import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
      <Link to='/' style={{ marginRight: 10 }}>
        Главная
      </Link>
      <Link to='/about'>О проекте</Link>
    </nav>
  );
}
