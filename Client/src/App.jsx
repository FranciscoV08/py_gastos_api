//Configuramos nuestro reactRouterDom

// Importamos la biblioteca de useform
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { MyMoney } from "./pages/MyMoney.jsx";
import { PrincipalPage } from "./pages/PrincipalPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { SalaryForm } from "./pages/SalaryForm.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

// Mi router de reacRouterDom
const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <PrincipalPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profile",
        element: <ProtectedRoutes element={<ProfilePage />} />,
      },
      {
        path: "/mimoney",
        element: <ProtectedRoutes element={<SalaryForm />} />,
      },
    ],
  },
]);

function App() {
  // Aqui mandamos nuestro provedor
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
