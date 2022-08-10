import { Component, For } from "solid-js";
import NavigationMenu, { Navigation } from "./NavigationMenu";

const SideNavigation: Component<Navigation[]> = (prop: Navigation[]) => {
  return (
    <>
      <For each={prop}>
        {(navigation) => (
          <NavigationMenu
            label={navigation.label}
            path={navigation.path}
            subPaths={navigation.subPaths}
          ></NavigationMenu>
        )}
      </For>
    </>
  );
};

export default SideNavigation;
