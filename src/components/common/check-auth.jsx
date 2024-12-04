import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth ({ isAuthenticated, user, children }) {
//     const location = useLocation()

//     console.log(location.pathname);

//     if (
//         !isAuthenticated &&
//         !(
//           location.pathname.includes("/login")||
//           location.pathname.includes("/register")

//         )
//       ) {
//         return <Navigate to="/auth/login" />;
//       }

//       if (
//         isAuthenticated &&
//         (location.pathname.includes("/login")||
//         location.pathname.includes("/register"))
//       ) {
//         if (user?.role === "admin") {
//           return <Navigate to="/admin/dashboard" />;
//         } else {
//           return <Navigate to="/unauth-page" />;
//         }
//       }

//       if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes("admin")
//       ){
//           return <Navigate to = "/unauth-page"/>
//       }

//       return <>{children}</>
// }

// export default CheckAuth

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname === "/") {
    if (!isAuthenticated) {
      return <Navigate to="/auth/login" />;
    }  else {
        return <Navigate to="/admin/dashboard" />;
      }
    }
  
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return <Navigate to="/admin/dashboard" />;
  }
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    (location.pathname.includes("/admin/products") ||
      location.pathname.includes("/admin/orders"))
  ) {
    return <Navigate to="/unauth-page" />;
  }
  return <>{children}</>;
}
export default CheckAuth;
