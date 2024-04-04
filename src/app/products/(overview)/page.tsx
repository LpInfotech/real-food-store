import Product from "../../ui/Product";
import data from "../../api/data.json";
import Filter from "@/app/ui/Filter";

const Page = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold text-blue-700">
        All Products
      </h1>
      <div className="flex md:flex-row flex-col gap-x-4 my-10">
        <div className="md:w-1/4 xl:w-1/5 w-full mb-5 p-4 border border-gray-200 rounded-lg shadow w-full">
          <Filter />
        </div>
        <div className="md:w-3/4 xl:w-4/5 w-full">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {data.map((product) => (
              <Product
                key={product.id}
                productId={product.id}
                productImage={product.productImage}
                productName={product.productName}
                originalPrice={product.originalPrice}
                sellingPrice={product.sellingPrice}
                isDiscount={product.isDiscount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
