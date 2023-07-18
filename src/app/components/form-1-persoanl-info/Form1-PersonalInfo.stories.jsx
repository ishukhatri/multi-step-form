import store from "@lib/redux/store";
import { Provider } from "react-redux";
import Form from "./Form1-PersonalInfo";

export default {
  title: "Components/Form1-PersonalInfo",
  component: "Form1-PersonalInfo",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const mobile = () => <Form />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const desktop = () => <Form />;
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
