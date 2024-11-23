import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import Adminproducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import CheckAuth from "./components/common/check-auth";
import UnauthPage from "./pages/unauth-page";
import NotFound from "./pages/not-found";

function App() {

  const isAuthenticated = true;
  const user = {
    name : 'Nut',
    role : 'user'
  }
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user = {user}>
          <AuthLayout />
          </CheckAuth>
          }>
          <Route path="login" element={<AuthLogin />} />
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user = {user}>
          <AdminLayout />
          </CheckAuth>
          }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<Adminproducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        <Route path="*" element={<NotFound/>}/>
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
