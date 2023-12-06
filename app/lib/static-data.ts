const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Admin",
    email: "admin@sneakers.com",
    password: "admin123",
  },
];

const products = [
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    sku: "CN2405-900",
    brand: "Nike",
    model: "Air Force 1 Low",
    nickname: "Travis Scott - Cactus Jack",
    description:
      "The Travis Scott x Nike Air Force 1 Low “Cactus Jack” is Scott’s intentionally rough-and-tumble reimagining of the revered silhouette. The patchwork design calls to mind Nike’s Bespoke Design Lab formerly located in downtown Manhattan for its sewn-together, DIY-inspired ethos. Scott outfits his second Air Force 1 Low collaboration with sturdy canvas patches that include shades of brown, lilac, dark navy blue, and black along the upper. A brown canvas Swoosh is located on each lateral side with a camo Swoosh on each medial side. Scott's 'Cactus Jack' graphics can be found printed across various panels of the upper. A black leather perforated toe contrasts the canvas, as does a unique black corduroy and blue nylon lace cover with a large gold zipper running down the middle. The medial side of the shoe also sports mismatched canvas with a tan buckle covering the heel. A cream midsole with a gum outsole completes the look",
    colorway: "multi-color/muted bornze-fossi",
    sizing: "men",
    available_sizes: [
      4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 15,
    ],
    release_year: 2019,
    retail_price: 160,
    resell_price: 647,
    image:
      "https://img.stadiumgoods.com/nike-air-force-1-low-travis-scott-cactus-jack_14700437_43094452_2048.jpg",
  },
];

const orders = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    user_id: users[0].id,
    price: 647,
    date: new Date(),
  },
];

const orderItems = [
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    order_id: orders[0].id,
    product_id: products[0].id,
    quantity: 1,
  },
];

module.exports = { users, products, orders, orderItems };
