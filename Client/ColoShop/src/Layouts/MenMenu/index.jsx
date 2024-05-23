import { getAdapter } from "axios";
import { getAllData } from "../../Services/api";
import { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
// const { Meta } = Card;

import "./index.scss";

const MenMenu = () => {
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


  const filterProducts = products.filter((p)=>p.category === "men")
  console.log(filterProducts);

  function searchProduct(value) {
    getAllData("products").then((res)=>{
      setProducts(res.data.products.filter((p)=>p.title.toLowerCase().includes(value.toLowerCase().trim())))
    })
  }

  return (
    <section className="tab-product">
      <div className="container">
        
        <div className="tab-inner">
        <div className="search">
          <input onChange={(e=>{searchProduct(e.target.value)})} type="text" id="search" placeholder="Search product..." />
        </div>
          <Row
            style={{ gap: "10px 0" }}
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {filterProducts &&
              filterProducts.map((p) => {
                return (
                  <Col className="gutter-row" span={6} key={p._id}>
                    <div style={style}>
                      <Card
                        hoverable
                        style={{
                          width: "100%",
                        }}
                        cover={
                          <img
                            alt="example"
                            src={p.image}
                          />
                        }
                      >
                        <div className="card-text">
                          <NavLink to={`/products/${p._id}`}>{p.title}</NavLink>
                         
                          <p>{p.price}$ <span style={{textDecoration:"line-through"}}>{((p.price)-((p.price*20)/100))}$</span></p>
                        </div>
                      </Card>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default MenMenu;
