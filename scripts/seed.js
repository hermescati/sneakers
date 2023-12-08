const { db } = require("@vercel/postgres");
const {
  products,
  orders,
  orderItems,
  users,
} = require("../app/lib/static-data.ts");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;

    console.log(`Created "users" table.`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
                INSERT INTO users (id, name, email, password)
                VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
                `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            sku VARCHAR(255) NOT NULL,
            brand VARCHAR(255) NOT NULL,
            model VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            colorway VARCHAR(255) NOT NULL,
            sizing VARCHAR(255) NOT NULL,
            available_sizes NUMERIC[] NOT NULL,
            release_year INTEGER NOT NULL,
            retail_price NUMERIC NOT NULL,
            resell_price NUMERIC NOT NULL,
            image TEXT[] NOT NULL
        );
      `;

    console.log(`Created "products" table.`);

    const insertedProducts = await Promise.all(
      products.map(async (product) => {
        return client.sql`
            INSERT INTO products (id, sku, brand, model, nickname, description, colorway, sizing, available_sizes, release_year, retail_price, resell_price, image)
            VALUES (
                ${product.id},
                ${product.sku},
                ${product.brand},
                ${product.model},
                ${product.nickname},
                ${product.description},
                ${product.colorway},
                ${product.sizing},
                ${product.available_sizes},
                ${product.release_year},
                ${product.retail_price},
                ${product.resell_price},
                ${product.image}
            )
            ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function seedOrders(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS orders (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          user_id UUID NOT NULL,
          price NUMERIC NOT NULL,
          date TIMESTAMP NOT NULL
        );
      `;

    console.log(`Created "orders" table.`);

    const insertedOrders = await Promise.all(
      orders.map(async (order) => {
        return client.sql`
            INSERT INTO orders (id, user_id, price, date)
            VALUES (
              ${order.id},
              ${order.user_id},
              ${order.price},
              ${order.date}
            )
            ON CONFLICT (id) DO NOTHING;
          `;
      })
    );

    console.log(`Seeded ${insertedOrders.length} orders`);

    return {
      createTable,
      orders: insertedOrders,
    };
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedOrderItems(client) {
  try {
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS orderItems (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          order_id UUID NOT NULL,
          product_id UUID NOT NULL,
          quantity INTEGER NOT NULL
        );
      `;

    console.log(`Created "orderItems" table.`);

    const insertedOrderItems = await Promise.all(
      orderItems.map(async (orderItem) => {
        return client.sql`
            INSERT INTO orderItems (id, order_id, product_id, quantity)
            VALUES (
              ${orderItem.id},
              ${orderItem.order_id},
              ${orderItem.product_id},
              ${orderItem.quantity}
            )
            ON CONFLICT (id) DO NOTHING;
          `;
      })
    );

    console.log(`Seeded ${insertedOrderItems.length} order items`);

    return {
      createTable,
      orderItems: insertedOrderItems,
    };
  } catch (error) {
    console.error("Error seeding order items:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedProducts(client);
  await seedOrders(client);
  await seedOrderItems(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
