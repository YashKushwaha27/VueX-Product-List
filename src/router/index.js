import { createRouter, createWebHistory } from "vue-router";

import ProductList from "../views/ProductList";
import ProductDetails from "../views/ProductDetails";

const routes = [
  {
    path: "/" || "",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
