import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Forgot,
  Login,
  Reset,
  Signup,
  VerifyEmail,
} from "./pages/Index";

const App = () => {
  const [theme, setTheme] = useState("dark");
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
