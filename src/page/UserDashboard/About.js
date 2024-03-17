import React from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import Footer1 from "../../components/layout/Footer1";

const About = () => {
  return (
    <div>
      <HeadingUser></HeadingUser>
      <div className="mx-40">
        <div className="flex flex-col mt-5">
          <span className="font-medium">VỀ CHÚNG TÔI</span>
          <div className="border p-5 mt-2 bg-blue-50">
            <div>
              <ul className="text-sky-400 leading-normal underline">
                <li>
                  <a href="/">1.Thời gian thành lập và quá trình phát triển.</a>
                </li>
                <li>
                  <a href="/">2.Lĩnh vực hoạt động</a>
                </li>
                <li>
                  <a href="/"> 3.Tiêu chí hoạt động</a>
                </li>
                <li>
                  <a href="/">4.Thành quả đạt được</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start leading-relaxed">
          <span className=" flex justify-center font-bold items-center w-full text-xl">
            Công ty Goal Line Arena
          </span>
          <span className="leading-relaxed font-bold">
            Thời gian thành lập phát triển
          </span>
          <span className="leading-relaxed">
            Công ty <strong>Goal Line Arena</strong> được thành lập năm 2023,
            với tên gọi <strong>ABC</strong> . Sau thời gian hình thành và phát
            triển, ABC không ngừng nghiêm cứu và hướng đến là đơn vị tiên phong
            trong việc ứng dụng công nghệ hiện đại kết hợp với dịch vụ. Chúng
            tôi luôn ưu tiên những ý tưởng du lịch độc đáo và sáng tạo đem lại
            trải nghiệm tốt cho khách du lịch.
          </span>
          <span className="leading-relaxed font-bold">Lĩnh vực hoạt động</span>
          <span className="leading-relaxed">
            ABC hoạt động như một nhà điều hành tour du lịch trong nước và ngoài
            nước, chuyên tổ chức các tour du lịch về miền Tây như:
          </span>
          <span className="pl-7">
            - Tour miền tây 1 ngày: <strong>MỸ THO - BẾN TRE</strong>
          </span>
          <span className="pl-7">
            - Tour miền tây 2 ngày 1 đêm:
            <strong>MỸ THO - BẾN TRE - CẦN THƠ</strong>
          </span>
          <span className="pl-7">
            - Tour tham quan vườn trái cây miền tây, các khu du lịch sinh thái.
          </span>
          <span>
            Bên cạnh đó, chúng tôi còn có các dịch vụ hỗ trợ đi kèm để đảm bảo
            mang đến trải nghiệm tốt nhất cho khách hàng như:
          </span>
          <span className="pl-7">- Dịch vụ tư vấn </span>
          <span className="pl-7">- Dịch vụ hỗ trợ khách hàng </span>
          <span className="pl-7">
            - Quản lý lữ hành và các gói du lịch tùy chỉnh
          </span>
          <span>
            <strong>ABC</strong> tự tin có thể đáp ứng nhu cầu đa dạng của du
            khách khi tham quan miền Tây. Không những thế, chúng tôi còn cung
            cấp giải pháp du lịch để nhằm mang đến cho khách hàng chuyến du lịch
            như ý. Tất cả đều được điều chỉnh chuyên nghiệp phù hợp nhu cầu và
            mang lại sự thoải mái, tiện lợi cho du khách, cho dù đó là gói du
            lịch trọn gói hay tự túc.
          </span>
          <span className="leading-relaxed font-bold">Tiêu chí hoạt động</span>
          <span className="leading-relaxed">
            Với phương châm mang lại những giá trị tốt nhất cho du khách
            <strong>ABC</strong>
            luôn cung cấp những gì tốt nhất, thuận tiện nhất đồng thời tìm kiếm
            những điểm đến và trải nghiệm mới với tiêu chí:
          </span>
          <span className="pl-7">- Chất lượng là quan tâm hàng đầu. </span>
          <span className="pl-7">- Giá tour cạnh tranh nhất. </span>
          <span className="pl-7">- Tour thiết kế theo yêu cầu. </span>
          <span className="pl-7">- Khởi hành hàng ngày. </span>
          <span className="pl-7">- Đặt tour nhanh chóng và thuận tiện. </span>
          <span className="pl-7">- Thanh toán linh hoạt. </span>
          <span className="pl-7">
            - Tư vấn và hỗ trợ tối đa cho khách hàng.
          </span>
          <span className="leading-relaxed font-bold">Thành quả đạt được</span>
          <span className=" leading-relaxed">
            Xuyên suốt quá trình hoạt động <strong>ABC</strong> may mắn nhận
            được sự tin tưởng và ủng hộ của hơn 500 nghìn khách hàng. Đây là
            nguồn động viên to lớn và là động lực để <strong>ABC</strong> ngày
            càng hoàn thiện và phát triển. Chúng tôi luôn hi vọng có thể mang
            lại cho quý khách hàng những chuyến du lịch miền Tây trọn vẹn nhất.
          </span>
        </div>
        <div className="flex items-center justify-center bg-sky-400 w-24 rounded-xl  mt-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.49 10.272V9.82204H13.837V16.144H13.067C12.9146 16.1443 12.7683 16.0841 12.6601 15.9767C12.552 15.8693 12.4908 15.7235 12.49 15.571C11.9277 15.9826 11.2488 16.205 10.552 16.204C9.68138 16.204 8.84638 15.8583 8.23057 15.2429C7.61476 14.6274 7.26853 13.7927 7.268 12.922C7.26853 12.0514 7.61476 11.2166 8.23057 10.6012C8.84638 9.98576 9.68138 9.64004 10.552 9.64004C11.2485 9.63925 11.928 9.86065 12.49 10.272ZM6.919 7.79004V7.99504C6.919 8.37704 6.868 8.68904 6.619 9.05504L6.589 9.08904C6.50604 9.18207 6.42535 9.2771 6.347 9.37404L2.024 14.8H6.919V15.568C6.919 15.6438 6.90407 15.7187 6.87506 15.7887C6.84605 15.8586 6.80353 15.9222 6.74994 15.9757C6.69635 16.0292 6.63273 16.0716 6.56273 16.1005C6.49273 16.1294 6.41773 16.1442 6.342 16.144H0V15.782C0 15.339 0.11 15.141 0.25 14.935L4.857 9.23004H0.192V7.79004H6.919ZM15.47 16.144C15.3427 16.144 15.2206 16.0935 15.1306 16.0034C15.0406 15.9134 14.99 15.7913 14.99 15.664V7.79004H16.431V16.144H15.47ZM20.693 9.60004C21.1272 9.59991 21.5571 9.68529 21.9582 9.85131C22.3594 10.0173 22.7239 10.2607 23.031 10.5676C23.3381 10.8745 23.5817 11.2389 23.748 11.64C23.9142 12.041 23.9999 12.4709 24 12.905C24.0001 13.3392 23.9147 13.7691 23.7487 14.1703C23.5827 14.5714 23.3393 14.9359 23.0324 15.243C22.7255 15.5501 22.3611 15.7937 21.9601 15.96C21.559 16.1263 21.1291 16.2119 20.695 16.212C19.8182 16.2123 18.9772 15.8642 18.357 15.2444C17.7368 14.6246 17.3883 13.7838 17.388 12.907C17.3877 12.0302 17.7358 11.1892 18.3556 10.5691C18.9754 9.94887 19.8162 9.6003 20.693 9.60004ZM10.553 14.853C10.8103 14.8589 11.0663 14.8133 11.3057 14.7188C11.5452 14.6244 11.7634 14.4831 11.9475 14.3031C12.1315 14.1232 12.2778 13.9083 12.3777 13.671C12.4775 13.4338 12.529 13.179 12.529 12.9215C12.529 12.6641 12.4775 12.4093 12.3777 12.1721C12.2778 11.9348 12.1315 11.7199 11.9475 11.54C11.7634 11.36 11.5452 11.2187 11.3057 11.1242C11.0663 11.0298 10.8103 10.9842 10.553 10.99C10.0483 11.0015 9.56822 11.2101 9.21537 11.571C8.86251 11.932 8.66495 12.4168 8.66495 12.9215C8.66495 13.4263 8.86251 13.9111 9.21537 14.272C9.56822 14.633 10.0483 14.8416 10.553 14.853ZM20.693 14.85C21.2088 14.85 21.7036 14.6451 22.0683 14.2804C22.4331 13.9156 22.638 13.4209 22.638 12.905C22.638 12.3892 22.4331 11.8945 22.0683 11.5297C21.7036 11.165 21.2088 10.96 20.693 10.96C20.1772 10.96 19.6824 11.165 19.3177 11.5297C18.9529 11.8945 18.748 12.3892 18.748 12.905C18.748 13.4209 18.9529 13.9156 19.3177 14.2804C19.6824 14.6451 20.1772 14.85 20.693 14.85Z"
              fill="white"
            />
          </svg>

          <span className="pl-2 text-white">Chia sẻ</span>
        </div>
        <div className=" my-5 text-xl leading-relaxed">
          <span>Tin liên quan</span>
          <h2 className="border w-[50px]  my-1 border-gray-700"></h2>
          <h3 className="border w-[40px] my-1 border-gray-700"></h3>
          <span className="flex items-center my-2">
            <svg
              width="8"
              height="15"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                fill="black"
              />
            </svg>
            <span className="pl-2 text-gray-400">Hướng dẫn đặt tour</span>
          </span>
          <span className="flex items-center">
            <svg
              width="8"
              height="15"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4 0L0 1.5L7.4 9L0 16.5L1.4 18L10.4 9L1.4 0Z"
                fill="black"
              />
            </svg>
            <span className="pl-2 text-gray-400">Hướng dẫn thanh toán</span>
          </span>
        </div>
        <div className="border rounded-md bg-gray-100 p-3 ">
          <span>Bình luận bài viết</span>
          <div className="grid grid-cols-3 gap-2 ">
            <div className="my-2 flex flex-col mx-3">
              <span>1. Nhập họ và tên</span>
              <input
                className="border border-gray-300 outline-none px-2 py-1 mt-2"
                type="text"
                placeholder="*"
              />
            </div>
            <div className="my-2 flex flex-col mx-3">
              <span>2. Nhập email</span>
              <input
                className="border border-gray-300 outline-none px-2 py-1 mt-2"
                type="text"
                placeholder="*"
              />
            </div>
            <div className="my-2 flex flex-col mx-3">
              <span>3. Nhập số điện thoại</span>
              <input
                className="border border-gray-300 outline-none px-2 py-1 mt-2"
                type="text"
                placeholder="*"
              />
            </div>
            <div>
              <span>4. Viết bình luận của bạn xuống dưới.</span>
              <input
                className="border border-gray-300 outline-none px-2 py-1 mt-2 min-w-[1170px] min-h-[160px] "
                type="text"
                placeholder="*"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-yellow-500 w-[300px] h-8 text-xl text-white flex items-center justify-center my-2 hover:bg-yellow-200">
            <button>Gửi ngay</button>
          </div>
        </div>
      </div>
      <Footer1></Footer1>
    </div>
  );
};

export default About;
