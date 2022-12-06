import { Meta, Story } from "@storybook/react";
import HomePage from "./index";
import { ComponentProps } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Template: Story<ComponentProps<typeof HomePage>> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  products: [
    {
      id: "test-id-1",
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
  nextPage: 1,
  hasNextPage: true,
};

export default {
  components: HomePage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} as Meta;
