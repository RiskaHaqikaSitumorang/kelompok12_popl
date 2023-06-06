import React from "react";
import ReactDOM from "react-dom/client";

// Component
// - Component == JavaScript function
// - React component are JavaScript function.
// - Use PascalCase for naming component.
// - Must return JSX (HTML)

export default function Component() {
  return (
    <div>
      <NestedComponent />
      <h1>I am Component</h1>;
    </div>
  );
}

// Nested Component
// - To nest components you need to create first one parent element and then nest components how many you want.
const NestedComponent = () => <h1>I am nested component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />);
