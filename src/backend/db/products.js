// import { v4 as uuid } from "uuid";
import { DogBreeds, catBreeds, birdBreeds, rodentBreeds } from "./productImage/index";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1,
    breed: "Husky",
    image: DogBreeds.Husky,
    price: 18000,
    rating: 4.3,
    category: "dog",
    discount: 200,
    description: "A graceful dog with erect ears and a dense soft coat, the Husky stands 20 to 24 inches (51 to 61 cm) tall at the withers and weighs 35 to 60 pounds (16 to 27 kg). It is usually gray, tan, or black and white, and it may have head markings resembling a cap, a mask, or spectacles."
  },
  {
    _id: 2,
    breed: "German Shepherd",
    image: DogBreeds.GermanShepherd,
    price: 15000,
    rating: 4.0,
    category: "dog",
    discount: 250,
    description: "A German Shepherd is a breed of working dog that originated in Germany from herding and farm dogs. It is a large, agile, muscular, and noble dog with a dense coat of brown and black hair. It is loyal, confident, courageous, steady, intelligent, and eager to learn and have a purpose. It can work as a service animal, a military dog, or a police dog."
  },
  {
    _id: 3,
    breed: "Golden Retriever",
    image: DogBreeds.GoldenRetriever,
    price: 12000,
    rating: 4.5,
    category: "dog",
    discount: 400,
    description: "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries. It is a frequent competitor in dog shows and obedience trials; it is also used as a gundog."
  },
  {
    _id: 4,
    breed: "Lebrador Retriever",
    image: DogBreeds.LebradorRetriever,
    price: 8000,
    rating: 3.8,
    category: "dog",
    discount: 230,
    description: "Labradors have a medium sized physique, short coat, floppy ears and soulful eyes. They are a gentle clever breed that need attention, training and love. They make great pets, show dogs, and working, hunting, therapy and service partners. They weigh around 70lbs and stand about 24 inches as adults, living for up to 14 years."
  },
  {
    _id: 5,
    breed: "Boxer",
    image: DogBreeds.Boxer,
    price: 10000,
    rating: 3.3,
    category: "dog",
    discount: 100,
    description: "The Boxer is a medium to large, short-haired breed of dog, developed in Germany. The coat is smooth and tight-fitting; colors are fawn, brindled, or white, with or without white markings."
  },

  {
    _id: 6,
    breed: "Persian cat",
    image: catBreeds.PersianCat,
    price: 16000,
    rating: 4.7,
    category: "cat",
    discount: 600,
    description: "The Persian cat, also known as the Persian longhair, is a long-haired breed of cat characterized by a round face and short muzzle. The first documented ancestors of Persian cats might have been imported into Italy from Khorasan as early as around 1620, however this has not been proven. Instead there is stronger evidence for a longhaired cat breed being exported from Afghanistan"
  },
  {
    _id: 7,
    breed: "Bengal cat",
    image: catBreeds.BengalCat,
    price: 6000,
    rating: 4.2,
    category: "cat",
    discount: 150,
    description: "The Bengal cat is wonderfully wild-looking, it doesn't usually grow much bigger than a hunky house cat (about 12 pounds) and is full-grown in about a year. This cat has a personality that is as appealing as its appearance. The Bengal is affectionate, playful, and can get along with people of all ages as well as other pets. It is an energetic cat and likes room to play."
  },
  {
    _id: 8,
    breed: "Ragdoll cat",
    image: catBreeds.RagdollCat,
    price: 8000,
    rating: 3.7,
    category: "cat",
    discount: 450,
    description: "The big, beautiful ragdoll cat does not reach its full size, about 15 pounds on average, until about four years of age. With its easygoing personality and social temperament, the ragdoll is ready to be friends with just about anyone"
  },
  {
    _id: 9,
    breed: "Siamese cat",
    image: catBreeds.SiameseCat,
    price: 8000,
    rating: 4.0,
    category: "cat",
    discount: 640,
    description: "Siamese cats are elegant, intelligent, and affectionate felines that originated in Thailand, formerly known as Siam. It is limited to the four traditional Siamese coat colours of seal point, blue point (a dilute of seal point), chocolate point, and lilac point (a dilute of the chocolate point)."
  },
  {
    _id: 10,
    breed: "Himalayan cat",
    image: catBreeds.HimalayanCat,
    price: 18000,
    rating: 3.8,
    category: "cat",
    discount: 450,
    description: "Himmies are gentle, somewhat sedate cats, but don't think that makes them boring. These felines enjoy playing with toys, although they aren't likely to go wild climbing your curtains like some other breeds. They are intelligent and very attuned to their owners, often greeting them at the door after an absence"
  },
  {
    _id: 11,
    breed: "Macaw",
    image: birdBreeds.Macaw,
    price: 4000,
    rating: 4.8,
    category: "bird",
    discount: 860,
    description: "Macaws are a group of New World parrots that are long-tailed and often colorful. They are popular in aviculture or as companion parrots, although there are conservation concerns about several species in the wild."
  },
  {
    _id: 12,
    breed: "Budgerigar",
    image: birdBreeds.Budgerigar,
    price: 2000,
    rating: 4.0,
    category: "bird",
    discount: 200,
    description: " Budgerigars are small green and yellow parrots, with black barring above, and a small patch of blue on the cheek. The male has a dark blue cere (skin at the base of the upper mandible surrounding the nostrils). In the female this is brownish when breeding and light blue otherwise. Young Budgerigars are similar to the adult birds, but are duller and have a dark brown eye (which is white or yellow in adults)."
  },
  {
    _id: 13,
    breed: "Hamster",
    image: rodentBreeds.Hamster,
    price: 1000,
    rating: 3.8,
    category: "rodent",
    discount: 100,
    description: "Hamsters are stout-bodied, with a tail much shorter than their body length, and have small furry ears, short stocky legs, and wide feet. Their thick long fur ranges from grayish to reddish brown, depending upon the species; underparts range from white to shades of gray and black."
  },
  {
    _id: 14,
    breed: "Guinea Pig",
    image: rodentBreeds.GuineaPig,
    price: 2500,
    rating: 4.8,
    category: "rodent",
    discount: 280,
    description: "It resembles other cavies in having a robust body with short limbs, large head and eyes, and short ears. The feet have hairless soles and short sharp claws. There are four toes on the forefeet and three on the hind feet. Several breeds of domesticated guinea pigs exist, which are sometimes grouped by coat texture and hair length."
  },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "5 kg",
  //   price: "1900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "1 kg",
  //   price: "700",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "15 kg",
  //   price: "3900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Royal Canin",
  //   image: "",
  //   weight: "5 kg",
  //   price: "2900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: " Whiskas",
  //   image: "",
  //   weight: "5 kg",
  //   price: "4900",
  //   categoryName: "Cat Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Drools",
  //   image: "",
  //   weight: "1.5 kg",
  //   price: "900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Me-O",
  //   image: "",
  //   weight: "1 kg",
  //   price: "900",
  //   categoryName: "Cat Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Sheba",
  //   image: "",
  //   weight: "1 kg",
  //   price: "900",
  //   categoryName: "Cat Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "5 kg",
  //   price: "1900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "5 kg",
  //   price: "1900",
  //   categoryName: "Dog Food",
  // },
  // {
  //   _id: uuid(),
  //   productName: "Pedigree",
  //   image: "",
  //   weight: "5 kg",
  //   price: "1900",
  //   categoryName: "Dog Food",
  // },
];