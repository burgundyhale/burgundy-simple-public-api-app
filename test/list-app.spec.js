import React from "react";
import ReactDOM from "react-dom";
import AmiibosApp from "../src/components/amiibos-app";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AmiibosApp />, div);
});
