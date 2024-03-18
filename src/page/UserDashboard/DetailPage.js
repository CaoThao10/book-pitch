import React, { useState } from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import Footer1 from "../../components/layout/Footer1";
import { Carousel } from "antd";
import { Flex, Rate } from "antd";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
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
      <div className="my-10 w-full h-full flex flex-col justify-center items-start ml-[50%] translate-x-[-20%] ">
        <div className="flex  gap-10 ">
          <div className="flex flex-col justify-center items-center">
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
                    <img
                      className="object-cover w-full"
                      src="./san6.webp"
                      alt=""
                    />
                  </h3>
                </div>
                <div className="h-[300px] ">
                  <h3 style={contentStyle}>
                    <img
                      className="object-cover w-full"
                      src="./san6.webp"
                      alt=""
                    />
                  </h3>
                </div>
                <div className="h-[300px] ">
                  <h3 style={contentStyle}>
                    <img
                      className="object-cover w-full"
                      src="./san6.webp"
                      alt=""
                    />
                  </h3>
                </div>
              </Carousel>
            </div>
          </div>
          <div className=" flex flex-col gap-y-3 ">
            <div>
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
            <div>
              <span className="font-semibold">Chọn giờ: </span>
              <Select
                defaultValue="chọn ngày"
                style={{
                  width: 200,
                }}
                onChange={handleChange}
                options={[
                  {
                    label: <span>20h00 - 22h00</span>,
                    value: "1",
                  },
                  {
                    label: <span>17h00 - 19h00</span>,
                    value: "2",
                  },
                ]}
              />
            </div>
            <div>
              <span className="font-semibold">Chọn giờ: </span>
              <input className="border py-1 px-2 rou" type="date" />
            </div>
            <button className="bg-green-500 max-w-[100px] py-1 px-2 rounded-lg text-white font-sans text-lg hover:bg-green-400">
              Đặt ngay
            </button>
          </div>
        </div>
        <div className="  flex ">
          <div className=" w-[500px] flex flex-col my-5 gap-y-3 ">
            <span>
              <strong>Địa chỉ:</strong> Nam Từ Liêm - Hà Nội.
            </span>
            <span>
              <strong>Diện tích:</strong> 20*100.
            </span>
            <span>
              <strong>Giờ mở cửa:</strong> 8h00 - 23h00.
            </span>
            <span>
              <strong>Giá:</strong> 350.000 vnđ/h
            </span>
            <span>
              <strong>Mô tả:</strong> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Repudiandae distinctio voluptate beatae non
              deleniti nobis impedit nisi, nemo tempore odio provident
              voluptates pariatur saepe quaerat. Rem asperiores corporis laborum
              dicta?
            </span>
          </div>
        </div>
      </div>

      <Footer1></Footer1>
    </div>
  );
};

export default DetailPage;
