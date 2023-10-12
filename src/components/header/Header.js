import React from 'react';

function Header() {
  return (
    <header>
      <h1>Логотип</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Головна</a>
          </li>
          <li>
            <a href="/дивани">Дивани</a>
          </li>
          <li>
            <a href="/ліжка">Ліжка</a>
          </li>
          <li>
            <a href="/матраси">Матраси</a>
          </li>
          <li>
            <a href="/кутки-кухонні">Кутки кухонні</a>
          </li>
          <li>
            <a href="/столи">Столи</a>
          </li>
          <li>
            <a href="/про-нас">Про нас</a>
          </li>
          <li>
            <a href="/контакти">Контакти</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
