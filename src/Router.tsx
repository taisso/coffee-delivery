import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success/:id" element={<Success />} />
      </Route>
    </Routes>
  );
}
