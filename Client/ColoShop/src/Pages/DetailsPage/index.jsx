import { useParams } from "react-router";
import { getDataById } from "../../Services/api";
import "./index.scss";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDataById("products", id).then((res) => {
      setProduct(res.data.product);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);

  return (
    <section>
      <div className="container">
      <div className="detail-inner">
          <div className="image">
            <img src={product["image"]} alt="" />
          </div>

          <div className="text">  
            <div className="text-detail">
              <p>Title:</p>
              <strong>{product["title"]}</strong>
            </div>
            <div className="text-detail">
              <p>Color:</p>
              <strong>{product.color} <span style={{padding:"10px",margin:"0 10px",backgroundColor:`${product.color}`}}></span></strong>
            </div>
            <div className="text-detail">
              <p>Size:</p>
              <strong>{product.size}</strong>
            </div>
            <div className="text-detail">
              <p>Category:</p>
              <strong>{product.category}</strong>
            </div>
            <div className="text-detail">
              <p>Price:</p>
              <strong>{product.price}$</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
