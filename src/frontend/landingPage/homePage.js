import { Link} from "react-router-dom";
import { useContext } from 'react';

import { DataContext } from "../Contexts/dataContext";
import { FilterContext } from "../Contexts/filterContext";
import "../landingPage/homePage.css";
import IMAGES from "../image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PetProductCategory from "../components/petProductCategory";
import Loader from "../components/Loader";

export function LandingPage() {
  const { categories } = useContext(DataContext);
  const { filterDispatch } = useContext(FilterContext);

  const selectCategoryHandler = (categoryName) => {
    console.log(categoryName);
    filterDispatch({ type: "filter_by_category", payLoad:categoryName});
  
  }


  if (categories.length === 0) return <Loader />;
  return (
    <>
      <div className="container">
        <Header />
        <div className="parentBanner">
          <div className="banner">
            <img
              className="banner-image"
              src={IMAGES.bannerImg}
              alt=" banner"
            />
          </div>
          <Link className="shopBtn" to="/products">
            Adopt Now
          </Link>
        </div>
        <div className="pets">
          <div className="line">
            <h3>
              <span>Pet Categories</span>
            </h3>
          </div>
          <div className="mainCategory">
            {
              categories?.map(({ id, image, description, categoryName }) => (
                <div className="categoryBox" key={id}>
                  <div className="card" >
                    <div className="categoryImg">
                      <img
                        src={image}
                        alt="animal categories"
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "0.7rem",
                        }}
                      />
                    </div>
                    <div className="description">
                      {description}
                      <Link to="/products">
                      <span  onClick={() => selectCategoryHandler(categoryName)}>Adopt</span>    
                      </Link>

                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <PetProductCategory />
        <Footer />
      </div>
    </>
  );
}
