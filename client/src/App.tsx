import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import HomePage from "./_root/pages/HomePage";
import AboutPage from "./_root/pages/AboutPage";
import BlogsPage from "./_root/pages/BlogsPage";
import RootLayout from "./_root/RootLayout";
import NotFoundPage from "./_root/pages/NotFoundPage";
import LoginForm from "./_auth/pages/LoginForm";
import RegisterForm from "./_auth/pages/RegisterForm";

import { Toaster } from "@/components/ui/toaster";
function App() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>

          <Route element={<RootLayout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </main>
    </>
  );
}

export default App;
