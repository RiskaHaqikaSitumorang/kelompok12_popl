import React from "react";
import ReactDOM from "react-dom/client";

// Component
// - Component == JavaScript function
// - React component are JavaScript function.
// - Use PascalCase for naming component.
// - Must return JSX (HTML)

export default function Component() {
  return <h1>I am Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
