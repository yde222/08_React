"use client";

import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";

function Layout({ children }) {

  return (
    <UserProvider>
  <ThemeProvider>{children}</ThemeProvider>;
  </UserProvider>
  );
  }

export default Layout;
