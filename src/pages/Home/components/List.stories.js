import React from "react";
import { action } from "@storybook/addon-actions";
import List from "./List";

export default {
  title: "List",
  component: List,
};

const listData = [
  { id: "1", note: "Note 1", date: "2021-01-01", time: "12:00" },
  { id: "2", note: "Note 2", date: "2021-02-02", time: "13:00" },
  { id: "3", note: "Note 3", date: "2021-03-03", time: "14:00" },
];

export const Default = () => (
  <List listData={listData} removeItem={action("removeItem")} />
);
