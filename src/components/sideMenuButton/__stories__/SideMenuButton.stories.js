import SideMenuButton from "../SideMenuButton.vue";

export default {
  title: "SideMenuButton",
  component: SideMenuButton,
  argTypes: {},

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SideMenuButton },
  template: "<SideMenuButton/>",
});

export const ByDefault = Template.bind({});
