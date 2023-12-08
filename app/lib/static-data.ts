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
    image: [
      "https://img.stadiumgoods.com/nike-air-force-1-low-travis-scott-cactus-jack_14700437_43094448_2048.jpg",
      "https://img.stadiumgoods.com/nike-air-force-1-low-travis-scott-cactus-jack_14700437_43094452_2048.jpg",
      "https://img.stadiumgoods.com/nike-air-force-1-low-travis-scott-cactus-jack_14700437_43094472_2048.jpg",
    ],
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    sku: "AR9880-023",
    brand: "Jordan",
    model: "Jordan 1 Retro High",
    nickname: "Homage to Home",
    description:
      "Classic Air Jordan 1 colorways have been combined before, but never quite like this. In spring 2018 Jordan Brand paid respect to the city of Chicago with the Air Jordan 1 “Homage to Home.” The sneaker is split down the middle with the the iconic “Bred” and “Chicago” colorways applied to each half. This model is part of the initial release that was sold exclusively in the Chicago area in an edition of 2,300 individually numbered pairs. The Chicago-exclusive version has 'From' and 'For' printed on the heels as another ode to the city where Michael Jordan became a legend.",
    colorway: "black/university red - white",
    sizing: "women",
    available_sizes: [10, 11, 11.5, 12, 14],
    release_year: 2018,
    retail_price: 160,
    resell_price: 1084,
    image: [
      "https://img.stadiumgoods.com/jordan-air-jordan-1-hi-h2h-nrg-chi-homage-to-home-numbered_13158181_42982638_2048.jpg",
      "https://img.stadiumgoods.com/jordan-air-jordan-1-hi-h2h-nrg-chi-homage-to-home-numbered_13158181_42984872_2048.jpg",
      "https://img.stadiumgoods.com/jordan-air-jordan-1-hi-h2h-nrg-chi-homage-to-home-numbered_13158181_42982658_2048.jpg",
    ],
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    sku: "BB550SE1",
    brand: "New Balance",
    model: "550",
    nickname: "White Red",
    description:
      "The New Balance 550 “White/Red/Black” is a retro-inspired colorway of the vintage basketball shoe that has been featured in popular collaborations with Aimé Leon Dore and Joe Freshgoods. Since returning on the scene in 2020 after spending the years prior in the vault, the New Balance 550 has become one of the brand’s most desirable shoes. The “White/Red/Black” features a white perforated upper with a red “N” branding on the sides. Black leather detailing is found on the red neoprene collar. A red “550” logo is embroidered on the forefoot. Additional branding includes an “NB” logo on the heel and retro-inspired “New Balance 550 USA” detailing on the tongue. A chunky white rubber midsole is contrasted with a black and red outsole.",
    colorway: "white red",
    sizing: "kids",
    available_sizes: [
      4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
      13, 14,
    ],
    release_year: 2022,
    retail_price: 110,
    resell_price: 103,
    image: [
      "https://img.stadiumgoods.com/new-balance-550-white-red_16959128_45620011_1000.jpg",
      "https://img.stadiumgoods.com/new-balance-550-white-red_16959128_45620015_1000.jpg",
      "https://img.stadiumgoods.com/new-balance-550-white-red_16959128_45620020_1000.jpg",
    ],
  },
  {
    id: "7a47e632-3049-404e-af75-b68d7099d8a4",
    sku: "GZ0711",
    brand: "Yeezy",
    model: "Boost 700 MNVN",
    nickname: "Blue Tint",
    description:
      "The adidas Yeezy Boost 700 MNVN “Blue Tint” is a Summer 2021 release of the retro-inspired “dad shoe” by Kanye West that continues the silhouette’s association with head-turning color blocking. The Yeezy 700 MNVN is one of four variations of the model and the only 700 to feature a branding and a no-sewn overlay design. As for the “Blue Tint,” adidas dresses the nylon upper in an icy light blue hue and places reflective “700” branding to either side that shines when exposed to light in the dark. Other details include a no-tie bungee lacing system and reflective black and grey panels on the toe and heel. The aforementioned details give the 700 MNVN a more progressive look when compared to early 700 releases. Adidas’s responsive Boost cushioning is embedded within the chunky black midsole. Release date: July 5, 2021",
    colorway: "blue tint/blue tint/blue tint",
    sizing: "men",
    available_sizes: [
      4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11, 11.5, 12, 12.5,
      13, 13.5, 14, 14.5, 17,
    ],
    release_year: 2021,
    retail_price: 150,
    resell_price: 235,
    image: [
      "https://img.stadiumgoods.com/adidas-yeezy-yeezy-boost-700-mnvn-blue-tint_17043887_43025716_1000.jpg",
      "https://img.stadiumgoods.com/adidas-yeezy-yeezy-boost-700-mnvn-blue-tint_17043887_43025717_1000.jpg",
      "https://img.stadiumgoods.com/adidas-yeezy-yeezy-boost-700-mnvn-blue-tint_17043887_43026746_1000.jpg",
    ],
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
