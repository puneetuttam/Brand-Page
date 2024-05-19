/**
 * First we will have app layout
 * AppLayout
 *  - Header
 *  - Body
 *
 */

import React from "React";
import ReactDOM from "react-dom";
import Body from "./components/Body.js";
import Header from "./components/Header.js";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
