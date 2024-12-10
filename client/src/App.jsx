// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import AuthLayout from './components/auth/layout';
// import AuthRegister from './pages/authpage/register';
// import Authlogin from './pages/authpage/login';
// import AdminLayout from './components/admin-view/layout';
// import AdminDashboard from './pages/admin-view/dashboard';
// import AdminProduct from './pages/admin-view/product';
// import AdminOrders from './pages/admin-view/orders';
// import ShoppingLayout from './components/shopping-view/layout';
// import NotFound from './pages/not found';
// import ShoppingHome from './pages/shopping-view/home';
// import ShoppingAccount from './pages/shopping-view/account';
// import ShoppingCheckout from './pages/shopping-view/checkout';
// import ShoppingListing from './pages/shopping-view/listing';
// import CheckAuth from './components/commom/checkauth';
// import UnauthPage from './pages/not found/unauth';

// function App() {
//   const isAuthenticated = true;
//   const user = {
//     name: 'venu',
//     role: 'user',
//   };
//   return (
//     <div className = "flex flex-col overflow-hidden bg-white">
//       <h1>My header </h1>
//       <Routes>
//         <Route path="/auth" element={
//           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//             <AuthLayout />
//           </CheckAuth>
//           }>
//           <Route path="login" element={< Authlogin/>} />
//           <Route path="Register" element={<AuthRegister />} />
//           <Route path="*" element={< NotFound/>} />
//         </Route>
//         <Route path='/admin' element={
//           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//           <AdminLayout/>
//           </CheckAuth>
//           }>
//           <Route path="dashboard" element={< AdminDashboard/>} />
//           <Route path="product" element={< AdminProduct/>} />
//           <Route path="order" element={< AdminOrders/>} />
//           <Route path="*" element={< NotFound/>} />
//         </Route>
//         <Route path='/shop' element={
//           <CheckAuth isAuthenticated={isAuthenticated} user={user}>
//             <ShoppingLayout/>
//           </CheckAuth>
//           }>
//           <Route path="home" element={< ShoppingHome/>} />
//           <Route path="account" element={< ShoppingAccount/>} />
//           <Route path="checkout" element={< ShoppingCheckout/>} />
//           <Route path="listing" element={< ShoppingListing/>} />
//           <Route path="*" element={< NotFound/>} />
//         </Route>
//         <Route path="/unauth-page" element={<UnauthPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import AuthRegister from './pages/authpage/register';
import AuthLogin from './pages/authpage/login';
import AdminLayout from './components/admin-view/layout';
import AdminDashboard from './pages/admin-view/dashboard';
import AdminProduct from './pages/admin-view/product';
import AdminOrders from './pages/admin-view/orders';
import ShoppingLayout from './components/shopping-view/layout';
import NotFound from './pages/not found';
import ShoppingHome from './pages/shopping-view/home';
import ShoppingAccount from './pages/shopping-view/account';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingListing from './pages/shopping-view/listing';
import CheckAuth from './components/commom/checkauth';
import UnauthPage from './pages/not found/unauth';

function App() {
  const isAuthenticated = true; // Mock authentication state
  const user = { name: 'venu', role: 'user' }; // Mock user data

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>My header</h1>
      <Routes>
        {/* Auth Routes */}
        <Route
          path="/auth/*"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="order" element={<AdminOrders />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Shop Routes */}
        <Route
          path="/shop/*"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Unauthorized Page */}
        <Route path="/unauth-page" element={<UnauthPage />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
