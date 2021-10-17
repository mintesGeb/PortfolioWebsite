import "./productsList.css";
import Product from "../product/Product";
import {products} from "../../data"

const ProductsList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It's Mintes</h1>
        <p className="pl-desk">
          training in multiple disciplines Software Development, Architecture
          and Industrial design.
        </p>
      </div>
      <div className="pl-list">
        {
          products.map(item=>(

            <Product url={item.url} key={item.id} link={item.link}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default ProductsList;
