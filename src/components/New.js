import React from "react";

const New = ({ data }) => {
  return (
    <div className="my-10 w-full flex flex-col">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-t-2 border-orange-600 ">
          <span className="text-orange-500 font-semibold text-3xl">
            Sân mới trong tháng
          </span>
        </div>
      </div>
      <div className="mx-[150px] my-5 grid grid-cols-5 gap-2">
        {data.map((item, index) => (
          <ItemTour
            key={index}
            img={item?.img}
            location={item?.location}
            quantity={item?.quantity}
            link={item?.link}
          ></ItemTour>
        ))}
      </div>
    </div>
  );
};

function ItemTour({ img, location, quantity, link }) {
  return (
    <div className=" relative w-[250px] h-[300px] pr-4 mb-5">
      <div className="w-full  h-full ">
        <img
          className="w-full h-full object-cover rounded-md "
          src={img}
          alt=""
        />
      </div>
      <div className="absolute  left-4 bottom-4 text-white">
        <h2 className="text-xl">{location}</h2>
        <h3>{quantity}</h3>
        <a href={link}>
          <button className="border rounded-xl px-2 py-1 text-white hover:bg-yellow-400 hover:border-transparent">
            Đặt ngay
          </button>
        </a>
      </div>
    </div>
  );
}

export default New;
