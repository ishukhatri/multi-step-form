import FormGroupIntro from "./FormGroupIntro";

export default {
  title: "Components/FormGroupIntro",
  component: FormGroupIntro,
};

export const PersonalInfo = () => (
  <FormGroupIntro
    title="Personal info"
    description={"Please provide your name, email address, and phone number."}
  />
);
