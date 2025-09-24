import type React from "react";

interface CardProps {
  img: string;
  title: string;
  price: number;
  bedrooms: number;
  location: string;
}
const Card: React.FC<CardProps> = ({
  img,
  title,
  price,
  bedrooms,
  location,
}) => {
  return (
    <>
      <div
        className="p-5 h-85 md:h-80 max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow transition-transform duration-300 
      hover:shadow-lg hover:scale-105 hover:shadow-blue-400"
      >
        <div className="flex justify-center items-center ">
          <img className="rounded-lg  h-40" src={img} alt={title} />
        </div>
        <div className=" py-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Located at:{" "}
            <span className="font-semibold tracking-wide">{location}</span>
          </p>
          <div className="flex justify-between items-center text-gray-700">
            <p>{price}$</p>
            <p>Bedrooms: {bedrooms}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
