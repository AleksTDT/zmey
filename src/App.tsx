import { Route, Routes } from "solid-app-router";

import Article from "./pages/Article";
import type { Component } from "solid-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Quote from "./components/QuoteViewer";
import { variablesAndConstants } from "./data/JavaScript/variables";

const App: Component = () => {
  return (
    <>
      <Header />
      <Quote />
      <div id="side-nav"></div>
      <div id="route" class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/article"
            element={<Article {...variablesAndConstants} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
