import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Product = ({
  productImage,
  isDiscount = false,
  productName,
  originalPrice = null,
  sellingPrice,
}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <Image className="p-8 w-full" src={productImage} alt="product image" width={300} height={300}/>
      </Link>
      <div className="px-5 pb-5">
        <Link href="#">
          <h5 className="text-base md:text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {productName}
          </h5>
        </Link>
        <div className="mb-2">
          {isDiscount && (
            <span className="text-sm md:text-base text-gray-500 line-through me-2">
              {originalPrice}{" "}
            </span>
          )}
          <span className="font-bold text-sm md:text-base text-gray-900">
            {sellingPrice}
          </span>
        </div>
        <Link href="#" className="text-blue-700">
          <FontAwesomeIcon icon={faCartShopping} height={30} />
        </Link>
      </div>
    </div>
  );
};

export default Product;
