import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import MainLayout from './layouts/MainLayout';

import './scss/app.scss';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pizza/Cart'));
const FulPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pizza/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pizza/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/pizza" element={<MainLayout />}>
        <Route path="/pizza" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идет загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/pizza/pizza/:id"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <FulPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
