import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from 'react-redux';
import store from "./redux/store.js";
import LandingPage from "./pages/LandingPage.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import Header from "./components/layout/Header.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

// 📍 react router for routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fashion",
    element: <ViewProductPage product={'fashion'} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mobiles",
    element: <ViewProductPage product={'mobiles'} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/beauty",
    element: <ViewProductPage product={'beauty'} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/groceries",
    element: <ViewProductPage product={'groceries'} />,
    errorElement: <ErrorPage />,
  }
]);

// Mostly in App.jsx file,
// people will add there routing and global contexts.
// 1️⃣ added AuthProvider from AuthContext
function App() {
  return (
    // Here Provider is part of react-redux
    <Provider store={store}>
      <AuthProvider>
        <div className="global-wrapper">
          <NotificationProvider>
            <Header />
            <RouterProvider router={router} />
          </NotificationProvider>
        </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
