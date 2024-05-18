import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { ProductList } from "./Products/ProductList";

function Home() {
  const { products } = useContext(ProductContext);
  console.log("products from home comp -->", products);

  const filteredProducts = products.filter((item) => {
    return item.category === "smartphones" || item.category === "laptops";
  });

  console.log("filtered", filteredProducts);

  return (
    <div>
      <ProductList allProducts={filteredProducts} />
    </div>
  );
}
export { Home };
