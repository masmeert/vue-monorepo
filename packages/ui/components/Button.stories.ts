import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button label="Button" />',
  }),
};

export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button label="Button" />',
  }),
};