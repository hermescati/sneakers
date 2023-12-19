import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
// import { User, Order, orderItems } from "./definitions";
import type { Product} from "./definitions";

export async function fetchProducts() {
  noStore();

  try {
    const data = await sql<Product>`SELECT * FROM products`;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch products.");
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
    throw new Error("Failed to fetch product data.");
  }
}

export async function fetchNewReleases() {
  noStore();

  try {
    const data =
      await sql<Product>`SELECT * FROM products where release_year = 2022`;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch new releases.");
  }
}

export async function fetchUnderRetail() {
  noStore();

  try {
    const data =
      await sql<Product>`SELECT * FROM products where resell_price < retail_price`;

    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch products under retail.");
  }
}
