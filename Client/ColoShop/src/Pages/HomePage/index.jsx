import "./index.scss";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import TabMenu from "../../Layouts/TabMenu";
import WomenMenu from "../../Layouts/WomenMenu";
import MenMenu from "../../Layouts/MenMenu";

import { Card } from "antd";
const { Meta } = Card;

import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { getAllData } from "../../Services/api";


// slider
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "ALL",
      children: <TabMenu />,
    },
    {
      key: "2",
      label: "WOMEN'S",
      children: <WomenMenu />,
    },
    {
      key: "3",
      label: "MEN'S",
      children: <MenMenu />,
    },
  ];

  const style = {
    // background: "#0092ff",
    // padding: "8px 0",
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData("products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-text">
            <p>SPRING / SUMMER COLLECTION 2017</p>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="product-inner">
            <div className="product">
              <span>
                <NavLink>WOMEN'S</NavLink>
              </span>
            </div>
            <div className="product">
              <span>
                <NavLink>ACCESSORIES'S</NavLink>
              </span>
            </div>
            <div className="product">
              <span>
                <NavLink>MEN'S</NavLink>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="arrival">
        <div className="container">
          <div className="arrival-inner">
            <div className="title">
              <h3>New Arrivals</h3>
            </div>

            <div className="tab-menu">
              <Tabs
                className="tabs"
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="seller">
        <div className="container">
          <div className="seller-inner">
            <div className="title">
              <h3>Best Seller</h3>
            </div>

            <div className="cards">
              {/* <Row
                style={{ gap: "10px 0" }}
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                {products &&
                  products.map((p) => {
                    return (
                      <Col className="gutter-row" span={6} key={p._id}>
                        <div style={style}>
                          <Card
                            hoverable
                            style={{
                              width: "100%",
                            }}
                            cover={<img alt="example" src={p.image} />}
                          >
                            <div className="card-text">
                              <NavLink to={`/products/${p._id}`}>
                                {p.title}
                              </NavLink>

                              <p>
                                {p.price}${" "}
                                <span
                                  style={{ textDecoration: "line-through" }}
                                >
                                  {p.price - (p.price * 20) / 100}$
                                </span>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
              </Row> */}

<Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products &&
                  products.map((p) => {
                    return (
                      <SwiperSlide style={{width:"300px"}} className="gutter-row" span={10} key={p._id}>
                        <div style={style}>
                          <Card
                            hoverable
                            style={{
                              width: "100%",
                            }}
                            cover={<img alt="example" src={p.image} />}
                          >
                            <div className="card-text">
                              <NavLink to={`/products/${p._id}`}>
                                {p.title}
                              </NavLink>

                              <p>
                                {p.price}${" "}
                                <span
                                  style={{ textDecoration: "line-through" }}
                                >
                                  {p.price - (p.price * 20) / 100}$
                                </span>
                              </p>
                            </div>
                          </Card>
                        </div>
                      </SwiperSlide>
                    );
                  })}
      </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
