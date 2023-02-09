import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div>
          <h4> Loading...</h4>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);

// npm audit
// npm audit --fix