import React from "react";

// import data
import { housesData } from "../data";

// import use params and link
import { useParams, Link } from "react-router-dom";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  // get the house id
  const { id } = useParams();
  // console.log(id);

  // get the house based on id
  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        {/* House Detail */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-700">
            $ {house.price}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="max-w-[769px]">
            {/* Image */}
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
            {/* Rooms */}
            <div className="flex gap-x-3 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />{" "}
                <div className="">{house.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />{" "}
                <div className="">{house.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />{" "}
                <div className="">{house.surface}</div>
              </div>
            </div>
            <div className="">{house.description}</div>
          </div>
          {/* Agent Details */}
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="" />
              </div>
              <div className="">
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm cursor-pointer">
                  View Listings
                </Link>
              </div>
            </div>
            {/* Form */}
            <form action="" className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm text-gray-300"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm text-gray-300"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm text-gray-300"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-300"
                placeholder="Message*"
                defaultValue="Hello, I am Interested In [Modern Apartment]"
              ></textarea>
              <div className="flex gap-x-2">
                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded text-sm p-4 w-full transition">
                  Send Message
                </button>
                <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-700 rounded p-4 text-sm w-full transition">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
