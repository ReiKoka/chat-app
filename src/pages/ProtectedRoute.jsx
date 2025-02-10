import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { token } = useAuth();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
