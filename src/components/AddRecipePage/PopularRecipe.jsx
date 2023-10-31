import React from "react";
import { Link } from "react-router-dom";
// import { PopularLink } from "./PopularDrinks.styled";
import pictureTest from '../../images/blue_iced_tea_large@1x.png';

// import axios from "axios";

// useEffect(() => {
//     get/popular
// },[])

// тимчасовий масив

const populardrinks = [
        {
            img: pictureTest,
            id: 1,
            name: "drink1",
            about: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        },
        {
            img: pictureTest,
            id: 2,
            name: "drink2",
            about: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        },
        {
            img: pictureTest,
            id: 3,
            name:" drink3",
            about: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        },
        {
            img: pictureTest,
            id: 4,
            name: "drink4",
            about: "Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        }
]
    
export const PopularRecipe = () => (
    <ul>
        {populardrinks.map(drink => <Link to="/drink" key={drink.id} id={drink.id}>
            <img
                src={drink.img}
                alt={drink.name}
            />
            <div>
                <h3>{drink.name}</h3>
                <p>{drink.about}</p>
            </div>
        </Link>)}
    </ul>
)