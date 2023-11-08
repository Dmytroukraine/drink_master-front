import React from "react";
import { Link } from "react-router-dom";
import styles from "./PopularRecipe.module.css"
import { useGetDrinksPopularAllQuery } from "redux/getPopularOperation";
import imgPlaceHolder from "../../../images/blue_iced_tea_smal@2x.png"
import { Loading } from "components/Loader/Loader";


export const PopularRecipe = () => {
    const { data = [], isLoading } =useGetDrinksPopularAllQuery();   

    return (
        <div className={styles.popularContainer}> {isLoading ? (
            <Loading/>
        ) : (
                <>
                    <h3 className={styles.title}>Popular drinks</h3>
                    <ul className={styles.popularList}>
                        {data.map(recipe => {
                            const { _id, drink, shortDescription, drinkThumb} = recipe;
                            return (
                                <>{!recipe ? [] : (
                                    <Link
                                        to={`/drinks/${_id}`}
                                        className={styles.drink}
                                        key={_id}
                                        id={_id}>
                                        <div className={styles.imgThumb}>
                                            <img
                                                className={styles.drinkImg}
                                                src={drinkThumb}
                                                alt={drinkThumb}
                                                onError={event => (event.target.src = imgPlaceHolder)}
                                            />
                                        </div>

                                        <div className={styles.drinkText}>
                                            <h3 className={styles.drinkTitle}>{drink}</h3>
                                            <p className={styles.drinkInstructions}>{shortDescription}</p>
                                        </div>
                                    </Link>
                                ) }</>
                                
                            )
                        })
                        }
                    </ul>
                </>  
        )}
            
        </div>
    
)}
