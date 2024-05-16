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
import useUserStore from "./lib/store/userStore";
import UserProfilePage from "./_root/pages/UserProfilePage";
import EditProfilePage from "./_root/pages/EditProfilePage";
function App() {
  const useStore = useUserStore();
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
            <Route
              path={`/profile/${useStore?.user?.username}`}
              element={<UserProfilePage />}
            />
            <Route
              path={`/edit-profile/${useStore?.user?.username}`}
              element={<EditProfilePage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </main>
    </>
  );
}

export default App;
