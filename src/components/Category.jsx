import { Link , ScrollRestoration } from "react-router-dom";
import "./category.css";
import { useSelector } from "react-redux";

export default function Product({ category }) {
        const link = useSelector(state=>state.path.pathForImagesPC)
        const fratelli=useSelector(state=>state.path.pathForImagesGIT)
  return (
    <div className="category" style={{backgroundImage:`url('${link}${category.mainImage}')`}}>
      <div className="category-filter"></div>
      <div className="category-content">
        <div className="link">
          <p className="category-text">{category.type}</p>
          <ScrollRestoration/>
          <Link to={`${fratelli}/products/${category.path}`} className=''>{category.desc}</Link>          
        </div>
      </div>
    </div>
  );
}
