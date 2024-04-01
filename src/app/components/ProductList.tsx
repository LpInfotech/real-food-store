import Product from './Product';
import data from '../api/data.json';

const ProductList = () => {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
			{data.map((product) => (
				<Product
					key={product.id}
					productImage={product.productImage}
					productName={product.productName}
					originalPrice={product.originalPrice}
					sellingPrice={product.sellingPrice}
					isDiscount={product.isDiscount}
				/>
			))}
		</div>
	);
};

export default ProductList;