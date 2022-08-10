import NavigationMenu, {
  SideNavigationItems
} from "./components/SideNavigation";
import { Route, Routes } from "solid-app-router";

import Article from "./pages/Article";
import type { Component } from "solid-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Quote from "./components/QuoteViewer";
import { variablesAndConstants } from "./data/JavaScript/variables";

const menu: SideNavigationItems = [
  {
    label: "label 1",
    path: "path 1",
  },
  {
    label: "label 2",
    subPaths: [
      {
        label: "label 2.1",
        path: "path 2.1",
      },
      {
        label: "label 2.2",
        path: "path 2.2",
      },
    ],
  },
  {
    label: "label 1",
    path: "path 1",
  },
];

const App: Component = () => {
  return (
    <>
      <Header />
      <Quote />
      <div id="side-nav">
        <NavigationMenu {...menu} />
      </div>
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
