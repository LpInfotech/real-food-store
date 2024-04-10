import Product from "../../ui/Product";
import data from "../../api/data.json";
import Filter from "@/app/ui/Filter";

const Page = (filterData, searchItem) => {
  function NoDataFound() {
    return <h2 className="text-xl font-semibold">No Products found!</h2>;
  }
  return (
      <div className="flex md:flex-row flex-col gap-x-4 my-10">
        <div className="md:w-1/4 xl:w-1/5 w-full p-4 bg-white border-gray-200 rounded-lg shadow">
          <Filter />
        </div>
        <div className="md:w-3/4 xl:w-4/5 w-full">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filterData.filterData.length === 0 && searchItem ? (
              <NoDataFound />
            ) : (
              (filterData.filterData.length > 0 && searchItem
                ? filterData.filterData
                : data
              ).map((product) => (
                <Product
                  key={product.id}
                  stock={product.stock}
                  productId={product.id}
                  productImage={product.productImage}
                  productName={product.productName}
                  productBrief={product.productBrief}
                  productRating={product.productRating}
                  originalPrice={product.originalPrice}
                  sellingPrice={product.sellingPrice}
                  isDiscount={product.isDiscount}
                />
              ))
            )}
          </div>
        </div>
      </div>
  );
};

export default Page;
