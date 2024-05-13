import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import LoginPage from "./auth/pages/LoginPage";
import RegisterPage from "./auth/pages/RegisterPage";
import HomePage from "./root/pages/HomePage";
import AboutPage from "./root/pages/AboutPage";
import BlogsPage from "./root/pages/BlogsPage";
import RootLayout from "./root/RootLayout";
import NotFoundPage from "./root/pages/NotFoundPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
