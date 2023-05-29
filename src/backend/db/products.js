import { v4 as uuid } from "uuid";
import {DogBreeds,catBreeds,birdBreeds,rodentBreeds} from "./productImage/index";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
      category: "dog",
      items:
      [
          {
            _id: uuid(),
            breed: "Husky",
            image: DogBreeds.Husky,
            price: "25000",
            categoryName: "dog",
          },
          {
            _id: uuid(),
            breed: "German Shepherd",
            image:DogBreeds.GermanShepherd,
            price: "15000",
            categoryName: "dog",
          },
          {
            _id: uuid(),
            breed: "Golden Retriever",
            image:DogBreeds.GoldenRetriever,
            price: "9000",
            categoryName: "dog",
          },
          {
            _id: uuid(),
            breed: "Lebrador Retriever",
            image:DogBreeds.LebradorRetriever,
            price: "12000",
            categoryName: "dog",
          },
          {
            _id: uuid(),
            breed: "Boxer",
            image: DogBreeds.Boxer,
            price: "19000",
            categoryName: "dog",
          }
    ]
  },
  {
    category: "cat",
    items:
    [
        {
          _id: uuid(),
          breed: "Persian cat",
          image:catBreeds.PersianCat,
          price: "16000",
          categoryName: "cat",
        },
        {
          _id: uuid(),
          breed: "Bengal cat",
          image:catBreeds.BengalCat,
          price: "6000",
          categoryName: "cat",
        },
        {
          _id: uuid(),
          breed: "Ragdoll cat",
          image:catBreeds.RagdollCat,
          price: "8000",
          categoryName: "cat",
        },
        {
          _id: uuid(),
          breed: "Siamese cat",
          image:catBreeds.SiameseCat,
          price: "8000",
          categoryName: "cat",
        },
        {
          _id: uuid(),
          breed: "Himalayan cat",
          image:catBreeds.HimalayanCat,
          price: "18000",
          categoryName: "cat",
        }
  ]
},
{
  category: "bird",
  items:
  [
      {
        _id: uuid(),
        breed: "Macaw",
        image:birdBreeds.Macaw,
        price: "4000",
        categoryName: "bird",
      },
      {
        _id: uuid(),
        breed: "Budgerigar",
        image:birdBreeds.Budgerigar,
        price: "2000",
        categoryName: "bird",
      }
]
},
{
  category: "rodent",
  items:
  [
      {
        _id: uuid(),
        breed: "Hamster",
        image:rodentBreeds.Hamster,
        price: "1000",
        categoryName: "rodent",
      },
      {
        _id: uuid(),
        breed: "Guinea Pig",
        image:rodentBreeds.GuineaPig,
        price: "2500",
        categoryName: "rodent",
      },
]
},
 { 
      category: "petFood",
      items:
      [
        {
              _id: uuid(),
              productName: "Pedigree",
              image: "",
              weight:"5 kg",
              price: "1900",
              categoryName: "Dog Food",
            },
            {
              _id: uuid(),
              productName: "Pedigree",
              image: "",
              weight:"1 kg",
              price: "700",
              categoryName: "Dog Food",
            },
            {
              _id: uuid(),
              productName: "Pedigree",
              image: "",
              weight:"15 kg",
              price: "3900",
              categoryName: "Dog Food",
            },
            {
              _id: uuid(),
              productName: "Royal Canin",
              image: "",
              weight:"5 kg",
              price: "2900",
              categoryName: "Dog Food",
            },
            {
              _id: uuid(),
              productName: " Whiskas",
              image: "",
              weight:"5 kg",
              price: "4900",
              categoryName: "Cat Food",
            },  
            {
              _id: uuid(),
              productName: "Drools",
              image: "",
              weight:"1.5 kg",
              price: "900",
              categoryName: "Dog Food",
            },
            {
              _id: uuid(),
              productName: "Me-O",
              image: "",
              weight:"1 kg",
              price: "900",
              categoryName: "Cat Food",
            },
            {
              _id: uuid(),
              productName: "Sheba",
              image: "",
              weight:"1 kg",
              price: "900",
              categoryName: "Cat Food",
            }
      ]
  },
  { 
    category: "petToys",
    items:
    [
      {
            _id: uuid(),
            productName: "Pedigree",
            image: "",
            weight:"5 kg",
            price: "1900",
            categoryName: "Dog Food",
      },
    ]
  },
  { 
    category: "petGroom",
    items:
    [
      {
            _id: uuid(),
            productName: "Pedigree",
            image: "",
            weight:"5 kg",
            price: "1900",
            categoryName: "Dog Food",
      },
    ]
  },
  { 
    category: "petCare",
    items:
    [
      {
            _id: uuid(),
            productName: "Pedigree",
            image: "",
            weight:"5 kg",
            price: "1900",
            categoryName: "Dog Food",
      },
    ]
  }
];