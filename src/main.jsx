import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { Details } from "./pages/Details";
import { New } from "./pages/New";
import { SignUp } from "./pages/SignUp";
import { OrderList } from "./pages/OrderList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>
);
