import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import AuthContext from "./context/authentication/AuthContext";
import MainApp from "./pages/MainApp";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "app",
    element: <MainApp />,
  }
]);

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
