import React from "react";
import { action } from "@storybook/addon-actions";
import Item from "./Item";

export default {
  title: "Item",
  component: Item,
};

export const Default = () => (
  <Item
    id="1"
    note="Note 1"
    date="2021-01-01"
    time="12:00"
    removeItem={action("removeItem")}
  />
);
