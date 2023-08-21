import PlanBox from "./plan-box/PlanBox";

export default {
  title: "Components/PlanBox",
  component: PlanBox,
};

export const withoutExtra = () => (
  <PlanBox
    iconPath={"/assets/images/icon-arcade.svg"}
    name={"Arcade"}
    rate={"$9/mo"}
  />
);
export const withExtra = () => (
  <PlanBox
    iconPath={"/assets/images/icon-arcade.svg"}
    name={"Arcade"}
    rate={"$90/yr"}
    extra={"2 months free"}
  />
);
