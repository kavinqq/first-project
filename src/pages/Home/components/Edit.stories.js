import React from "react";
import { action } from "@storybook/addon-actions";
import Edit from "./Edit";

export default {
  title: "Edit",
  component: Edit,
};

export const Default = () => <Edit add={action("add")} />;
