import React from "react";

import List from "../List";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        backgroundColor: "#333",
      }}
    >
      <div
        id="content"
        style={{ width: "320px", height: "568px" }}
        className="bg-gray-50 rounded overflow-y-scroll mx-auto"
      >
        <List />
      </div>
    </div>
  );
};

export default App;
