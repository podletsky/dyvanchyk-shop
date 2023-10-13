import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <a href="/">Логотип</a>
      </div>
      <div className="footer-info">
        <p>магазин меблів 'Диванчик'. Усі права захищено.</p>
        <p>м.Червоноград вул.Івасюка 20,Б.Хмельницького 63 Г</p>
      </div>
      <div className="footer-social">
        <a href="/facebook">Facebook</a>
        <a href="/instagram">Instagram</a>
      </div>
      <div className="footer-contact">
        <p>Телефон: +380976032153</p>
        <p>Email: nazar.org@gmail.com</p>
      </div>
    </footer>
  );
}

export { Footer };
