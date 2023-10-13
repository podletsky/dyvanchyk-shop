import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Search } from './search/Search';
import { Menu } from './menu/Menu.js';
import { AboutUs } from './aboutUs/AboutUs.js';
import { KitchenCorners } from './kitchenCorners/KitchenCorners';
import { Sofa } from './sofa/Sofa';
import { Table } from './table/Table';
import { Matrase } from './matrase/Matrase';
import { Bed } from './bed/Bed.js';
import { Contacts } from './contacts/Contacts.js';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Promotions } from './promotions/Promotions';
import { Catalog } from './catalog/Catalog';
function App() {
  return (
    <Router>
      <Header />
      <Search />
      <Menu />

      <Routes>
        <Route path="/про-нас" element={<AboutUs />} />
        <Route path="/кутки-кухонні" element={<KitchenCorners />} />
        <Route path="/дивани" element={<Sofa />} />
        <Route path="/столи" element={<Table />} />
        <Route path="/матраси" element={<Matrase />} />
        <Route path="/ліжка" element={<Bed />} />
        <Route path="/контакти" element={<Contacts />} />
        <Route path="/каталог-товарів" element={<Catalog />} />{' '}
        {/* Додаємо маршрут для каталогу товарів */}
        <Route path="/акції" element={<Promotions />} />{' '}
        {/* Додаємо маршрут для акцій */}
      </Routes>
      <Footer />
    </Router>
  );
}

export { App };
