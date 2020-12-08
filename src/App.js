import React from "react";
// Routes
import PublicRoutes from "./routes/public.routes";
// Layouts
import MainContainerLayout from "./template/MainContainerLayout";
import HeaderLayout from "./template/HeaderLayout";
import MainContentLayout from "./template/MainContentLayout";
import FooterLayout from "./template/FooterLayout";

function App() {
  return (
    <MainContainerLayout>
      <HeaderLayout />
      <MainContentLayout>
        <PublicRoutes />
      </MainContentLayout>
      <FooterLayout />
    </MainContainerLayout>
  );
}

export default App;
