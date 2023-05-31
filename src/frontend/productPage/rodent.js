import React from 'react';
import { useState, useEffect } from 'react';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import "./productPage_Css/breed.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/filter";
import Loader from "../components/Loader";

const Rodent = () => {
    const [rodentBreedName, setRodentBreedName] = useState([]);
    const getRodentBreedData = async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setRodentBreedName(data.products);
        } catch (error) {
            console.log(error);
        }
    };
    const rodentBreed = rodentBreedName?.filter(rodent => rodent.category === "rodent")[0]?.items;

    useEffect(() => {
        getRodentBreedData();
    }, []);
    if(rodentBreedName.length === 0) return <Loader />;
    return (
        <>
            <Header />
            <div className='main-body'>
            <div className='filter-area'>
                    <Filter />
                </div>
            <div className='breed-container'>
                {
                    rodentBreed?.map(({ _id, breed, image, price }) => (
                        <div className='main-card' key={_id}>
                            <div className='breed-card'>
                                <button className='breed-wishlist'><BsBookmarkHeartFill /></button>
                                <div className='breed-image'>
                                    <img src={image} alt={breed}  />
                                </div>
                                <p className='breed-name'>{breed}</p>
                                <p className='breed-price'>₹ {price}</p>
                                <button className='adoptbtn'>Adopt Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Rodent;