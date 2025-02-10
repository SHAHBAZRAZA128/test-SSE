import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Signup } from "../Pages";

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AppRouter;
