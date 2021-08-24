import { Button } from "antd";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="my-8 text-center text-6xl font-bold">
        <span className="text-green-600">TailwindCSS</span> and
        <span className="text-red-600">Angular </span> is cool to use!
      </h1>
      <p className="text-center text-3xl">Thanks for reading!</p>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
