import React from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import Banner from "../../components/Banner";
import Popular from "../../components/Popular";
import New from "../../components/New";
import Footer1 from "../../components/layout/Footer1";

const dataPopular1 = [
  {
    img: "/san2.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/chi-tiet",
  },

  {
    img: "/san4.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/chi-tiet",
  },

  {
    img: "/san7.jpg",
    title: "Đà Nẵng-Thành phố Đà Nẵng",
    price: "1.000.000",
    link: "/chi-tiet",
  },
];

const dataNew = [
  {
    img: "/san1.jpg",
    location: "Ha Noi",
    quantity: "3 sân",
    link: "/chi-tiet",
  },
  {
    img: "/san2.jpg",
    location: "Ho Chi Minh",
    quantity: "5 sân",
    link: "/chi-tiet",
  },
  {
    img: "/san4.jpg",
    location: "Da Lat",
    quantity: "5 sân",
    link: "/chi-tiet",
  },
  {
    img: "/san7.jpg",
    location: "Ha Noi",
    quantity: "3 sân",
    link: "/chi-tiet",
  },
  {
    img: "/san8.jpg",
    location: "Ho Chi Minh",
    quantity: "5 sân",
    link: "/chi-tiet",
  },
  {
    img: "/san10.jpg",
    location: "Ho Chi Minh",
    quantity: "5 sân",
    link: "/chi-tiet",
  },
];

const HomePage = () => {
  return (
    <div className="mx-4">
      <HeadingUser></HeadingUser>
      <Banner></Banner>
      <Popular data={dataPopular1}></Popular>
      <New data={dataNew}></New>
      <Footer1></Footer1>
    </div>
  );
};

export default HomePage;
