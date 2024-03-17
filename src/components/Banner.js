import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Banner = () => {
  return (
    <div className="relative">
      <div className="w-full opacity-80 mt-2 ">
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                className="object-cover h-full w-full"
                src="./san6.webp"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="object-cover h-full w-full"
                src="./san7.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="object-cover h-full w-full"
                src="./san8.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                className="object-cover h-full w-full"
                src="./san10.jpg"
                alt=""
              />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="absolute flex items-center bg-[#ebebeb] rounded-lg justify-center gap-5 flex-col top-[50%]  left-[50%] translate-x-[-50%]  translate-y-[-50%]  p-5">
        <span className="text-[#c91515] text-2xl font-semibold">
          Đặt sân bóng online, không lo về giá
          <br /> Chỉ từ 300.000vnđ
        </span>
        <button className="bg-green-600 hover:bg-green-400 w-[150px] px-3 py-1 text-2xl text-white font-medium rounded-lg">
          Đặt ngay
        </button>
      </div>
    </div>
  );
};

export default Banner;
