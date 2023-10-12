import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './header/Header.js';
import { AboutUs } from './aboutUs/AboutUs.js';
import { KitchenCorners } from './kitchenCorners/KitchenCorners';
import { Sofa } from './sofa/Sofa';
import { Table } from './table/Table';
import { Matrase } from './matrase/Matrase';
import { Bed } from './bed/Bed.js';
import { Contacts } from './contacts/Contacts.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/про-нас" element={<AboutUs />} />
        <Route path="/кутки-кухонні" element={<KitchenCorners />} />
        <Route path="/дивани" element={<Sofa />} />
        <Route path="/столи" element={<Table />} />
        <Route path="/матраси" element={<Matrase />} />
        <Route path="/ліжка" element={<Bed />} />
        <Route path="/контакти" element={<Contacts />} />
      </Routes>
    </Router>
  );
}
export { App };
