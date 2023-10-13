import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">Логотип</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <Link to="/каталог-товарів">Каталог товарів</Link>{' '}
            {/* Додайте посилання на каталог товарів */}
          </li>
          <li>
            <Link to="/акції">акції</Link>{' '}
          </li>
        </ul>
      </nav>
      <div className="cart">
        <a href="/кошик">
          <i className="fa fa-shopping-cart"></i> Кошик
        </a>
      </div>
      <div className="language">
        <a href="/мова">Українська</a>
      </div>
      <div className="contact">
        <a href="/контакти">Контакти</a>
      </div>
    </header>
  );
}

export { Header };
