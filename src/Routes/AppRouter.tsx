import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Signup } from "../Pages";
import ProtectedRoute from "../Components/ProtectedRoute";
import { AuthProvider } from "../Context/AuthContext";

const AppRouter: React.FC = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>
        } />
      </Routes>
      </AuthProvider>
    </>
  );
};

export default AppRouter;
