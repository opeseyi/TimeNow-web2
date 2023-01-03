import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FeaturePage from "./component/Pages/FeaturePage";
import PricePage from "./component/Pages/PricePage";

// const FeaturePage = React.lazy(() => import("./component/Pages/FeaturePage"));
// const PricePage = React.lazy(() =>
//   import(() => import("./component/Pages/PricePage"))
// );

const App = () => {
  return (
    // <Suspense>
    <Routes>
      <Route path="/" element={<FeaturePage />} />
      <Route path="/pricepage" element={<PricePage />} />
    </Routes>
    // </Suspense>
  );
};

export default App;
