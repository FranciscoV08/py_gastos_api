//Configuramos nuestro reactRouterDom

// Importamos la biblioteca de useform
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BillsProvider } from "./context/billsContext.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { MyMoney } from "./pages/MyMoney.jsx";
import { PrincipalPage } from "./pages/PrincipalPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { SalaryForm } from "./pages/SalaryForm.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import { MyObject } from "./pages/MyObject.jsx";

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
      {
        path: "/miobject",
        element: <ProtectedRoutes element={<MyObject />} />,
      },
    ],
  },
]);

function App() {
  // Aqui mandamos nuestro provedor
  return (
    <AuthProvider>
      <BillsProvider>
        <RouterProvider router={router} />
      </BillsProvider>
    </AuthProvider>
  );
}

export default App;
