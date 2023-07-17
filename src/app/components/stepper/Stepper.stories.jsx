import Stepper from "./Stepper";
import store from "@lib/redux/store";

import { Provider } from "react-redux";

export default {
  title: "Components/Stepper",
  component: Stepper,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const mobile = () => <Stepper />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const desktop = () => <Stepper />;
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
