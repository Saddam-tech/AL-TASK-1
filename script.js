const { parseStringToHTML } = require("./utils.js");
import product_1 from "./static/product_1.png";
import product_2 from "./static/product_2.png";
import product_3 from "./static/product_3.png";
import product_4 from "./static/product_4.png";
import star5 from "./static/star5.svg";

const carousel = document.getElementById("carousel");

const products = [
  {
    id: 1,
    shipping: "Free Shipping",
    image_src: product_1,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 2,
    shipping: "Free Shipping",
    image_src: product_2,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 3,
    shipping: "Free Shipping",
    image_src: product_4,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 4,
    shipping: "Free Shipping",
    image_src: product_3,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 5,
    shipping: "Free Shipping",
    image_src: product_1,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 6,
    shipping: "Free Shipping",
    image_src: product_2,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 7,
    shipping: "Free Shipping",
    image_src: product_4,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
  {
    id: 8,
    shipping: "Free Shipping",
    image_src: product_3,
    name: "product name",
    price: "$34.00",
    star_count: star5,
  },
];

(async function () {
  const _products = [];
  for (let p of products) {
    let parsed_HTML = `
    <div class="product">
      <div class="image-wrap">
        <img src="${p.image_src}" alt="${p.id}">
      </div>
        <p class="bold">
            ${p.name}
        </p> 
        <span>
        ${new Array(5)
          .fill("*")
          .map((el) => `<img src="${p.star_count}" alt="${p.id}" />`)
          .join(" ")}
        </span>
        <p class="price">
        ${p.price}
        </p> 
    </div>
    `;

    _products.push(parsed_HTML);
  }

  carousel.innerHTML = _products.map((el) => el).join("");
})();
