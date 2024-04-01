import Product from "./Product";

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="col">
        <Product
          productImage={
            "https://www.bigbasket.com/media/uploads/p/l/100229_1-kinley-mineral-water.jpg"
          }
          isDiscount={true}
          productName={"Water, 500ml"}
          originalPrice={"$60"}
          sellingPrice={"$50"}
        />
      </div>
      <div className="col">
        <Product
          productImage={
            "https://www.bigbasket.com/media/uploads/p/m/40075197_5-daawat-basmati-rice-rozana-super-90.jpg?tr=w-1920,q=80"
          }
          productName={"Rice, 5kg"}
          sellingPrice={"$100"}
        />
      </div>
      <div className="col">
        <Product
          productImage={
            "https://www.bigbasket.com/media/uploads/p/m/40147598_2-heritage-golden-cow-milk.jpg?tr=w-1920,q=80"
          }
          productName={"Milk, 500ml"}
          sellingPrice={"$10"}
        />
      </div>
      <div className="col">
        <Product
          productImage={
            "https://www.bigbasket.com/media/uploads/p/m/40302408_1-english-oven-butter-croissant.jpg?tr=w-1920,q=80"
          }
          isDiscount={true}
          productName={"Croissant, 120g"}
          originalPrice={"$40"}
          sellingPrice={"$35"}
        />
      </div>
    </div>
  );
};

export default ProductList;
