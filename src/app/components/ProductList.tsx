import Product from "./Product";

import data from "../api/data.json";

const productsList = data.map((product) => (
  <Product
    productImage={product.productImage}
    isDiscount={product.isDiscount}
    productName={product.productName}
    originalPrice={product.originalPrice}
    sellingPrice={product.sellingPrice}
  />
));

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-5 md:grid-cols-3">
      {productsList}
    </div>
  );
};

export default ProductList;
