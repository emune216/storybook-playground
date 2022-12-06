import { Meta, Story } from "@storybook/react";
import Item, { ItemProps } from "./Item";

const Template: Story<ItemProps> = (args) => <Item {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: "test-id",
  thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  title: "맥북",
  description: "맥북 16인치",
  price: 3000,
  brand: "apple",
  rating: 4.5,
  stock: 140,
};

export default {
  components: Item,
  decorators: [
    (Story) => (
      <div style={{ width: "fit-content" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
