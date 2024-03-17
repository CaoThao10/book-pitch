// import React, { useState } from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import Footer1 from "../../components/layout/Footer1";
import { Carousel } from "antd";
import { Flex, Rate } from "antd";
// const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const DetailPage = ({ data }) => {
  return (
    <div>
      <HeadingUser></HeadingUser>
      <div className="my-10 w-full h-full flex flex-col justify-center items-center">
        <div className="w-[500px] ">
          <Carousel autoplay>
            <div className="h-[300px]">
              <h3 style={contentStyle}>
                <img
                  className="object-cover  w-full"
                  src="./san6.webp"
                  alt=""
                />
              </h3>
            </div>
            <div className="h-[300px] ">
              <h3 style={contentStyle}>
                <img className="object-cover w-full" src="./san6.webp" alt="" />
              </h3>
            </div>
            <div className="h-[300px] ">
              <h3 style={contentStyle}>
                <img className="object-cover w-full" src="./san6.webp" alt="" />
              </h3>
            </div>
            <div className="h-[300px] ">
              <h3 style={contentStyle}>
                <img className="object-cover w-full" src="./san6.webp" alt="" />
              </h3>
            </div>
          </Carousel>
        </div>
        <div className="my-5 h-full w-[500px] flex justify-center items-center">
          <span className="mt-2 text-xl text-green-500 font-semibold">
            Sân Hà Nội
          </span>
        </div>
        <Flex gap="middle" vertical>
          {/* {value ? <span>Đánh giá</span> : null} */}
          <Rate
            //   tooltips={desc}
            //   onChange={setValue}
            value={3}
          />
        </Flex>
        <div className="w-[500px] flex flex-col my-5">
          <span>Địa chỉ: Nam Từ Liêm - Hà Nội.</span>
          <span>Diện tích: 20*100.</span>
          <span>Giờ mở cửa: 8h00 - 23h00.</span>
          <span>Giá: 350.000 vnđ/h </span>
          <span>
            Mô tả: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae distinctio voluptate beatae non deleniti nobis impedit
            nisi, nemo tempore odio provident voluptates pariatur saepe quaerat.
            Rem asperiores corporis laborum dicta?
          </span>
        </div>
      </div>
      <Footer1></Footer1>
    </div>
  );
};

export default DetailPage;
