import React from "react";
import { Link } from "react-router-dom";
import styles from "./PopularRecipe.module.css"
import { useGetDrinksPopularAllQuery } from "redux/getPopularOperation";


export const PopularRecipe = () => {
    const { data = [], isLoading } =useGetDrinksPopularAllQuery();   

    return (
        <div className={styles.popularContainer}> {isLoading ? (
            <h1>Loading...</h1>
        ) : (
                <>
                    <h3 className={styles.title}>Popular drinks</h3>
                    <ul className={styles.popularList}>
                        {data.map(recipe => {
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
                </>  
        )}
            
        </div>
    
)}
