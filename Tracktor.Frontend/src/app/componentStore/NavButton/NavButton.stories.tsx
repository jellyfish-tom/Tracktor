import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NavButton } from "./NavButton";

storiesOf("NavButton", module).add("with label", () => (
  <NavButton path={"some/path"} />
));
//   .add('with some emoji', () => (
//     <Hello onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Hello>
//   ));
