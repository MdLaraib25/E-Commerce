import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {

    const item = products.find((product) => product._id === productId);

    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }

  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10">

      {/* Product Layout */}
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* LEFT SIDE - Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">

          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[20%] w-full">

            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
                alt=""
              />
            ))}

          </div>

          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>

        </div>

        {/* RIGHT SIDE - Product Details */}
        <div className="flex-1">

          {/* Product Name */}
          <h1 className="text-2xl font-semibold mb-4">
            {productData.name}
          </h1>

          {/* Product Price */}
          <p className="text-2xl font-bold mb-6">
            ${productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            {productData.description}
          </p>

          {/* Size Selection */}
          <div className="mb-6">
            <p className="mb-2 font-medium">Select Size</p>

            <div className="flex gap-3">

              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border px-4 py-2 ${
                    item === size
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Add To Cart Button */}
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700" >
            ADD TO CART
          </button>
         <hr className="mt-8 sm:w-4/5 border-gray-300" />
         
         <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product.</p>
              <p> Easy return and exchange policy within 7 days</p>
         </div>

        </div>

      </div>

      {/* --- description & review section */}
      <div className=" mt-20">
            <div className="flex">
              <b className="border px-5 py-3 text-sm ">Description</b>
              <p className="border px-5 py-3 text-sm ">Reviews(122</p>
            </div>
            <div className="flex flex-col gap-4 py-6 text-sm text-gray-500">
                <p>
                  This premium quality product is designed to provide maximum comfort and durability. Made with high-quality materials, it ensures long-lasting performance and a stylish look. Perfect for everyday use, it combines modern design with practical functionality.
                </p>

                <p>
                  Crafted with soft and breathable fabric, this product offers a perfect balance of comfort and style. Its modern design makes it suitable for both casual and formal occasions. A must-have addition to your wardrobe for a clean and elegant look.
                </p>
            </div>
      </div>

      {/* --- Display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;