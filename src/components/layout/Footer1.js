import React from "react";

const Footer1 = () => {
  return (
    <div className="grid grid-cols-3 bg-[#eee] mt-10">
      <div className="flex flex-col items-center justify-center">
        <img className="h-[150px]" src="/logo.png" alt="" />
        <span className="text-2xl font-semibold text-green-500">
          Goal Line Arena
        </span>
      </div>
      <div className="flex flex-col  justify-center">
        <span className="text-xl font-medium text-green-500">
          Thông tin liên hệ
        </span>
        <ul className="gap-2 flex flex-col mt-3">
          <li>Địa chỉ: Nam Từ Liêm - Hà Nội</li>
          <li>Điện thoại: 0254454646</li>
          <li>Email: dobietlagiday@gmail.com</li>
        </ul>
      </div>
      <div className="flex flex-col  justify-center">
        <span className="text-xl font-medium text-green-500">Chính sách</span>
        <div className="gap-2 flex flex-col mt-3">
          <a href="/">Hợp tác với chúng tôi</a>
          <a href="/">Chính sách bảo mật</a>
          <a href="/">Điều khoản chung</a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
