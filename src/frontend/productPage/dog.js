import React from 'react';
import { useState, useEffect } from 'react';
import { BsBookmarkHeartFill } from 'react-icons/bs';

import "./productPage_Css/breed.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/filter";
import Loader from "../components/Loader";

const Dog = () => {
    const [breedName, setBreedName] = useState([]);
    const getBreedData = async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setBreedName(data.products);
        } catch (error) {
            console.log(error);
        }
    };
    const dogBreed = breedName?.filter(dog => dog.category === "dog")[0]?.items;
    console.log(dogBreed);
    useEffect(() => {
        getBreedData();
    }, []);
    if(breedName.length === 0) return <Loader />;
    return (
        <>
            <Header />
            <div className='main-body'>
                <div className='filter-area'>
                    <Filter />
                </div>
            <div className='breed-container'>
                {
                    dogBreed?.map(({ _id, breed, image, price }) => (
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

export default Dog;