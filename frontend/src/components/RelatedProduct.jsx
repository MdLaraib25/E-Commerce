import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

const RelatedProduct = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {

    if (products.length > 0) {

      let productsCopy = products.slice();

      productsCopy = productsCopy.filter(
        item => item.category === category
      );

      productsCopy = productsCopy.filter(
        item => item.subCategory === subCategory
      );

      setRelatedProducts(productsCopy.slice(0, 4));

    }

  }, [products, category, subCategory]);

  return (
    <div className="my-24">

      <div className="text-center text-3xl py-2">
        <Title title={"RELATED"} text2={"PRODUCTS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

        {relatedProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}

      </div>

    </div>
  );
};

export default RelatedProduct;