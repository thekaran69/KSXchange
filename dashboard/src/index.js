// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";
// import Home from "./components/Home";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Home from "./components/Home"
import PrivateRoute from "./components/PrivateRoute"

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log("inside dashboard");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/*" element={<Home />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

