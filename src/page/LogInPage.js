import React from "react";

const LogInPage = () => {
  return (
    <div className="w-full flex mt-5 items-center justify-center">
      <div className="flex flex-col w-[500px] bg-gray-50  items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img src="./logo.png" alt="" />
          <span className=" text-green-600 text-2xl font-semibold">
            Goal Line Arena
          </span>
        </div>
        <div className="mt-10  p-5 rounded-lg w-[400px]">
          <form action="">
            <div className="flex flex-col gap-3">
              <label
                className="text-base text-green-600 font-medium"
                htmlFor=""
              >
                Email đăng nhập
              </label>
              <input
                className="outline-none rounded-md border border-green-200 p-2"
                type="email"
                placeholder="Nhập email đăng nhập"
              />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <label
                className="text-base text-green-600 font-medium"
                htmlFor=""
              >
                Mật khẩu đăng nhập
              </label>
              <input
                className="outline-none rounded-md border border-green-200 p-2"
                type="password"
                placeholder="Nhập mật khẩu đăng nhập"
              />
            </div>
            <div className="mt-5 w-full flex justify-center">
              <button className="bg-green-400 text-white text-lg px-2 py-1  rounded-lg">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
