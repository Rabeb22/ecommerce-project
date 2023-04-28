import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ConfirmPage from './pages/ConfirmPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import OrderPage from './pages/OrderPage';
import PasswordResetPage from './pages/PasswordResetPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';
import OrderListPage from './pages/OrderListPage';
import ErrorPage from './pages/ErrorPage';

// for showing the 'new update available' banner and to register the service worker
import ServiceWorkerWrapper from './ServiceWorkerWrapper';

const App = () => {
  return (
    <Router>
      <Header />
      <ServiceWorkerWrapper />

      <main className="py-2">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:keyword" element={<HomePage />} />
            <Route path="/page/:pageNumber" element={<HomePage />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomePage />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/user/password/reset/:token"
              element={<PasswordResetPage />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart/:id?" element={<CartPage />} />
            <Route path="/user/confirm/:token" element={<ConfirmPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeorder" element={<PlaceOrderPage />} />
            <Route path="/order/:orderID" element={<OrderPage />} />
            <Route path="/admin/userlist" element={<UserListPage />} />
            <Route
              path="/admin/userlist/:pageNumber"
              element={<UserListPage />}
            />
            <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
            <Route path="/admin/productlist" element={<ProductListPage />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductListPage />}
            />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditPage />}
            />
            <Route path="/admin/orderlist" element={<OrderListPage />} />
            <Route
              path="/admin/orderlist/:pageNumber"
              element={<OrderListPage />}
            />
            <Route element={<ErrorPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
