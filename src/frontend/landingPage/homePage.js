import { Link } from "react-router-dom";
import "../landingPage/homePage.css";
import { useEffect, useState } from "react";

import IMAGES from "../image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PetProductCategory from "../components/petProductCategory";

export function LandingPage() {
  const [category, setCategory] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategory(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const pet =  category?.filter(pets => pets?.category === "pets")[0]?.items;
  console.log(pet);
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
          <Link className="shopBtn" to={""}>
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
             pet?.map(({ id, image, description }) => (
                <div className="categoryBox" key={id}>
                  <div className="card">
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
                      <Link to="">Adopt</Link>
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
