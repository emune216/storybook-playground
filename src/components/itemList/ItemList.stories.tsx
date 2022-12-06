import { Meta, Story } from "@storybook/react";
import ItemList, { ItemListProps } from "./ItemList";

const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const Default = Template.bind({});

Default.args = {
  products: [
    {
      id: "test-id",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      title: "맥북",
      description: "맥북 16인치",
      price: 3000,
      brand: "apple",
      rating: 4.5,
      stock: 140,
      discountPercentage: 0.5,
      category: "laptops",
      images: [],
    },
    {
      id: "test-id",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      title: "맥북",
      description: "맥북 16인치",
      price: 3000,
      brand: "apple",
      rating: 4.5,
      stock: 140,
      discountPercentage: 0.5,
      category: "laptops",
      images: [],
    },
  ],
};

export default {
  component: ItemList,
} as Meta;
