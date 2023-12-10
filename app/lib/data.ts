import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User, Product, Order, orderItems } from "./definitions";

export async function fetchProducts() {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<Product>`SELECT * FROM products`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}

export async function fetchProductBySku(sku: string) {
  noStore();

  try {
    const data =
      await sql<Product>`SELECT * FROM products WHERE products.sku = ${sku}`;

    const product = data.rows.map((product) => ({
      ...product,
    }));

    return product[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the product.");
  }
}
