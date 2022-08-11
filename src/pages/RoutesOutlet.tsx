import { Route, Routes } from "solid-app-router";
import { intro, variablesAndConstants } from "../data/JavaScript/variables";

import Article from "./Article";
import { Component } from "solid-js";
import Home from "./Home";

const RoutesOutlet: Component = () => (
  <div id="routes-outlet" class="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article" element={<Article {...variablesAndConstants} />} />
      <Route path="/javascript/intro" element={<Article {...intro} />} />
    </Routes>
  </div>
);

export default RoutesOutlet;
