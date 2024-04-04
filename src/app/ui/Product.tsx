import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Product = ({
  productId,
  productImage,
  isDiscount = false,
  productName,
  originalPrice = null,
  sellingPrice,
}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition hover:shadow-md">
      <Link href={`/products/product/${productId}`}>
        <Image
          className="p-4 w-full border-b"
          priority={true}
          src={productImage}
          alt="product image"
          width={300}
          height={300}
        />
      </Link>
      <div className="p-4">
        <Link href={`/products/product/${productId}`}>
          <h5 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 mb-2">
            {productName}
          </h5>
        </Link>
        <div className="mb-2">
          <span className="font-bold text-sm md:text-base text-gray-900 me-2">
            ${sellingPrice}
          </span>
          {isDiscount && (
            <span className="text-sm md:text-base text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <button className="inline-block text-blue-700 border p-2 rounded-lg shadow">
          <FontAwesomeIcon icon={faCartShopping}/>
          <span> Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;
