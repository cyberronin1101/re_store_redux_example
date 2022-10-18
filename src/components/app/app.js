import "./app.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home_page";
import { CartPage } from "../pages/cart_page";
import Header from "../elements/header/header";

export const App = () => {
  return (
    <main role={"main"} className={"container"}>
      <Header numItems={5} total={12599} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={"/cart"} element={<CartPage />} />
      </Routes>
    </main>
  );
};
