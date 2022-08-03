import React from 'react'
import { EmptyStateMessages } from "@productindex/const/errors";
import { ProductCard } from "@productindex/components/cards/ProductCard";
import { ProductInventoryType } from '@productindex/types/ProductInventoryType';

type Props = {
    products: Array<ProductInventoryType>;
}

function ProductListBox({products}: Props) {
  return (
    <div className="product-list">
        {products.length > 0 ? (
        products.map((product) => (
            <ProductCard
            productName={product.Product.product_name}
            description={product.Product.description}
            price={product.show_price ? String(product.price) : 'Contact for price'}
            photoSrc={product.Product.image_url}
            id={product.Product.id}
            />
        ))
        ) : (
        <div className="empty-box">
            {" "}
            {EmptyStateMessages.noProductsOrServices}
        </div>
        )}
  </div>
  )
}

export default ProductListBox