export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Product = {
  id: string;
  sku: string;
  brand: string;
  model: string;
  nickname: string;
  description: string;
  colorway: string;
  sizing: string;
  available_sizes: number[];
  release_year: number;
  retail_price: number;
  resell_price: number;
  image: string[];
};

export type Order = {
  id: string;
  user_id: string;
  price: number;
  date: Date;
};

export type orderItems = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
};
