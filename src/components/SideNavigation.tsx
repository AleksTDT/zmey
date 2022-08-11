import { Component, For } from "solid-js";
import NavigationMenu, { Navigation } from "./NavigationMenu";

const menu: Navigation[] = [
  {
    label: "JavaScript Introduction",
    subPaths: [
      {
        label: "What is Java Script",
        path: "javascript/intro",
      },
    ],
  },
];

const SideNavigation: Component = () => (
  <div id="side-nav">
    <For each={menu}>
      {(navigation) => (
        <NavigationMenu
          label={navigation.label}
          path={navigation.path}
          subPaths={navigation.subPaths}
        ></NavigationMenu>
      )}
    </For>
  </div>
);

export default SideNavigation;
