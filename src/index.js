import { insert_product } from "./dbops/product.js";

const product = {
  product_name: "lenovo_laptop",
  product_code: "nnnn05",
  quantity: 9,
  unit_price: 55555,
  apply_discount: true,
  packing: "yes",
};

insert_product(product);
