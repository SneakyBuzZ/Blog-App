import { ThemeProvider } from './contexts/themeContext';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [theme, settheme] = useState("dark")

  const darkmode = () => {
    settheme("dark");
  }

  const lightmode = () => {
    settheme("light");
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme])

  return (
    <>
      <ThemeProvider value={{ theme, darkmode, lightmode }}>
        <section className='dark:bg-[#0f0f0fdb] bg-[#f0faff]'>
          <Header />
          <Outlet />
          <Footer />
        </section>
      </ThemeProvider>
    </>
  )
}

export default App
