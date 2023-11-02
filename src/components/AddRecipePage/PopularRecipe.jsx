import React from "react";
import { Link } from "react-router-dom";
// import { PopularLink } from "./PopularDrinks.styled";
import { getDrinksPopular } from "services/drinksAPI";
// import pictureTest from '../../images/blue_iced_tea_large@1x.png';
// import { popularJSON } from "data/popularRecipe";
import { useState } from "react";
// import { useEffect } from "react";
import styles from "./PopularRecipe.module.css"
import axios from "axios";
import { useSelector } from "react-redux";
import { getUserState } from "redux/userSelectors";

// import axios from "axios";



// тимчасовий токен
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDNhMjNiMGY3ZWI0OTdkYjVkMWM5NCIsImlhdCI6MTY5ODkzMjQ4NSwiZXhwIjoxNjk5MDE1Mjg1fQ.pL3xnvAw08_IVOmOjF95HBZQgh2FExouOutmOHihmgc"
// axios.defaults.headers.common.Authorization = `Bearer ${token} `


export const PopularRecipe = () => {
    const [popular, setPopular] = useState([]);
    // const user = useSelector(getUserState);
    // const { token } = useSelector(getUserState);
    const { token } = useSelector(getUserState);
    console.log("token", token);
    // const token = user.token;
    axios.defaults.headers.common.Authorization = `Bearer ${token} `

    getDrinksPopular()
        .then(result => {
            console.log("result", result);
            
            return setPopular([...result]);
                        // popular.push(result)
        }).catch (error => {
            return console.log(error);
        })
        .finally(()=> console.log("finally"));
    
    // useEffect(() => {
    //     // const user = useSelector(getUserState);
    //     // const token = user.token;
    //     // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDNhMjNiMGY3ZWI0OTdkYjVkMWM5NCIsImlhdCI6MTY5ODkzMjQ4NSwiZXhwIjoxNjk5MDE1Mjg1fQ.pL3xnvAw08_IVOmOjF95HBZQgh2FExouOutmOHihmgc"
    //     // axios.defaults.headers.common.Authorization = `Bearer ${token} `
    //     getDrinksPopular()
    //         .then(result => {
    //             console.log("result", result);
    //             return setPopular([...result]);
    //                     // popular.push(result)
    //                 }).catch (error => {
    //                     return console.log(error);
    //                 })
    //                 .finally(()=> console.log("finally"));
       
    // },[])
    // console.log("popular", popular);
    

    return (
        <div className={styles.popularContainer}>
            <h3 className={styles.title}>Popular drinks</h3>
            <ul className={styles.popularList}>
                {popular.map(recipe => {
                    const { _id, drink, shortDescription, drinkThumb} = recipe;
                    // console.log("_id", _id);
                    return (
                        <Link
                            to={`/drink/${_id}`}
                            className={styles.drink}
                            key={_id}
                            id={_id}>
                    <img
                        className={styles.drinkImgThumb}
                        src={drinkThumb}
                        alt={drinkThumb}
                    />
                    <div className={styles.drinkText}>
                        <h3 className={styles.drinkTitle}>{drink}</h3>
                        <p className={styles.drinkInstructions}>{shortDescription}</p>
                    </div>
                </Link>
                    )
                })
                }
            </ul>
        </div>
    
)}
