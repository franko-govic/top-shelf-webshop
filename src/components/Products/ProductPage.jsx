import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import Rating from "react-rating";

function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Loading...</p>;
  }

  const {
    title,
    brand,
    price,
    description,
    thumbnail,
    images,
    rating,
    discountPercentage,
  } = product;

  return (
    <div className="container mx-auto pt-12 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
        <div className="flex flex-col items-center ">
          <img src={thumbnail} alt={title} className="max-w-xl mb-3 rounded" />
          <div className="flex justify-center item-center gap-3 ">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index}`}
                className="w-20 h-20 rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="text-center lg:text-left ">
          <p className="text-lg">{brand}</p>
          <h1 className="text-2xl font-medium mb-2">{title}</h1>
          <p className="text-md font-semibold text-red-600">${price}</p>
          <Rating initialRating={rating} />
          <p className="mb-4">{description}</p>
          <button className="bg-blue-900 py-3 px-6 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export { ProductPage };
