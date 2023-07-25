import { v4 as uuid } from "uuid";
import IMAGES from "./productImage";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    category: "pets",
      items:
    [
      {
       
    _id: uuid(),
    link: "dog",
    categoryName: "Dog",
    image: IMAGES.Dog,
    description:
      "Different kind of dogs breed ranging price from INR 5000 to INR 30000",
  },
  {
    _id: uuid(),
    link: "cat",
    categoryName: "Cat",
    image: IMAGES.Cat,
    description:
      "Different kind of cats breed ranging price from INR 1000 to INR 20000.",
  },
  {
    _id: uuid(),
    link: "bird",
    categoryName: "Bird",
    image: IMAGES.Bird,
    description:
      "Different kind of birds breed ranging price from INR 5000 to INR 15000.",
  },
  {
    _id: uuid(),
    link: "rodent",
    categoryName: "Rodent",
    image: IMAGES.Rodents,
    description:
      "Different kind of rodent breed ranging price from INR 1000 to INR 10000.",
  },
]},
{
  category:"petProducts",
  items:
  [
    {
      _id: uuid(),
      categoryName: "Pet food",
      image: IMAGES.petFood,
      description:
        "Different kind of pet food available in our store for every age of your pet. You can have all kinds and companies pet food under one roof.",
    },
    {
      _id: uuid(),
      categoryName: "Pet toys",
      image: IMAGES.petToy,
      description:
        "Different kind of pet toys available in our store for every age of your pet. You can have all kinds and companies pet toys under one roof.",
    },
    {
      _id: uuid(),
      categoryName: "Pet care",
      image: IMAGES.petCare,
      description:
        "Different kind of pet care products available in our store for every age of your pet. You can have all kinds and companies pet care products under one roof.",
    },
    {
      _id: uuid(),
      categoryName: "Pet shelter",
      image: IMAGES.petShelter,
      description:
        "Different kind of pet houses available in our store for every age of your pet with different sizes. You can have all kinds and companies pet shelter under one roof.",
    }
  ]
}
];
