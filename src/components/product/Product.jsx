import "./product.css";

const Product = ({ url, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={url} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
