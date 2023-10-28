// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import { Loader } from '../components/Loader/Loader';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Paginator } from '../components/Paginator/Paginator';
import { DrinkList } from '../components/FavouriteDrinksPage/DrinkList';

import css from './FavouriteDrinksPage.module.css';

const drink = [{
  "_id": {
    "$oid": "64aebb7f82d96cc69e0eb4a5"
  },
  "title": "Applejack",
  "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169604/cocktails-v1/ingredient/Applejack.png",
  "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169604/cocktails-v1/ingredient/Applejack-Medium.png",
  "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169604/cocktails-v1/ingredient/Applejack-Small.png",
  "abv": "40",
  "alcohol": "Yes",
  "description": "Applejack is a strong apple-flavoured alcoholic drink produced from apples. Popular in the American colonial era, the drink's prevalence declined in the 19th and 20th centuries amid competition from other spirits.",
  "type": "Beverage",
  "flavour": "apples, oak",
  "country": "United States"
},{
  "_id": {
    "$oid": "64aebb7f82d96cc69e0eb4a6"
  },
  "title": "Gin",
  "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Gin.png",
  "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Gin-Medium.png",
  "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Gin-Small.png",
  "abv": "40",
  "alcohol": "Yes",
  "description": "Gin is liquor which derives its predominant flavour from juniper berries (Juniperus communis). From its earliest origins in the Middle Ages, gin has evolved over the course of a millennium from a herbal medicine to an object of commerce in the spirits industry. Gin was developed on the basis of the older jenever, and became popular in Great Britain (particularly in London) when William of Orange, leader of the Dutch Republic, occupied the English, Scottish, and Irish thrones with his wife Mary. Gin is one of the broadest categories of spirits, represented by products of various origins, styles, and flavour profiles that all revolve around juniper as a common ingredient.",
  "type": "Gin",
  "flavour": "English-style gin, citrus, juniper",
  "country": "United States"
},{
  "_id": {
    "$oid": "64aebb7f82d96cc69e0eb4a7"
  },
  "title": "Dark rum",
  "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark20rum.png",
  "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark20rum-Medium.png",
  "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169605/cocktails-v1/ingredient/Dark20rum-Small.png",
  "abv": "40",
  "alcohol": "Yes",
  "description": "Dark rum, also known as black rum, classes as a grade darker than gold rum. It is generally aged longer, in heavily charred barrels. Dark rum has a much stronger flavour than either light or gold rum, and hints of spices can be detected, along with a strong molasses or caramel overtone. It is used to provide substance in rum drinks, as well as color.\r\n\r\nIn addition to uses in mixed drinks, dark rum is the type of rum most commonly used in cooking.",
  "type": "Rum",
  "flavour": "sugar",
  "country": "United States"
},{
  "_id": {
    "$oid": "64aebb7f82d96cc69e0eb4a8"
  },
  "title": "Sweet Vermouth",
  "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Sweet20Vermouth.png",
  "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Sweet20Vermouth-Medium.png",
  "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Sweet20Vermouth-Small.png",
  "abv": "16.5",
  "alcohol": "Yes",
  "description": "Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;) is an aromatized, fortified wine flavoured with various botanicals (roots, barks, flowers, seeds, herbs, and spices).\r\n\r\nThe modern versions of the beverage were first produced in the mid to late 18th century in Turin, Italy. While vermouth was traditionally used for medicinal purposes, its true claim to fame is as an aperitif, with fashionable cafes in Turin serving it to guests around the clock. However, in the late 19th century it became popular with bartenders as a key ingredient in many classic cocktails that have survived to date, such as the Martini, the Manhattan, the Rob Roy, and the Negroni. In addition to being consumed as an aperitif or cocktail ingredient, vermouth is sometimes used as an alternative white wine in cooking.\r\n\r\nHistorically, there have been two main types of vermouth: sweet and dry. Responding to demand and competition, vermouth manufacturers have created additional styles, including extra-dry white, sweet white (bianco), red, amber (ambre or rosso), and rosé. Vermouth is produced by starting with a base of a neutral grape wine or unfermented wine must. Each manufacturer adds additional alcohol and a proprietary mixture of dry ingredients, consisting of aromatic herbs, roots, and barks, to the base wine, base wine plus spirit or spirit only – which may be redistilled before adding to the wine or unfermented wine must. After the wine is aromatized and fortified, the vermouth is sweetened with either cane sugar or caramelized sugar, depending on the style. Italian and French companies produce most of the vermouth consumed throughout the world, although the United States and the United Kingdom are also producers.",
  "type": "Fortified Wine",
  "flavour": "sugar",
  "country": "United States"
},
{
  "_id": {
    "$oid": "64aebb7f82d96cc69e0eb4c0"
  },
  "title": "Watermelon",
  "ingredientThumb": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Watermelon.png",
  "thumb-medium": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Watermelon-Medium.png",
  "thumb-small": "http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Watermelon-Small.png",
  "abv": "0",
  "alcohol": "No",
  "description": "Watermelon (Citrullus lanatus) is a plant species in the family Cucurbitaceae, a vine-like flowering plant originally domesticated in West Africa. It is a highly cultivated fruit worldwide, having more than 1,000 varieties.\r\n\r\nWatermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. There is evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It is commonly consumed as a juice or as an ingredient in mixed beverages.",
  "type": "Fruit",
  "flavour": "fruit",
  "country": "United States"
}]


export const FavouriteDrinksPage = () => {
  // const [drink, setDrink] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchDrink() {
  //     setIsLoading(true);
  //     try {
  //       //Добавить адрес??? "/api/drinks/favorites"
  //       await fetch(``)
  //         .then(response => {
  //           return response.json();
  //         })
  //         .then(response => {
  //           setDrink([...response]); //добавить куда точно приходит ответ response.drinks???
  //         });
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchDrink();
  // }, []);

  return (
    <div>
      {/* {error && { error }} */}
      <PageTitle title="Favorites" />
      <div>
        {/* {isLoading && <Loader />} */}
        {drink.length > 0 ? (
           <DrinkList drinks={drink} />  
        ) : (
          <div>
            <img
              className={css.drinkNotImg}
              srcSet="
                    ../images/blue_iced_tea_large@1x.png 467w,
                    ../images/blue_iced_tea_large@2x.png 934w,
                    ../images/blue_iced_tea_medium@1x.png 284w,
                    ../images/blue_iced_tea_medium@2x.png 568w,
                    ../images/blue_iced_tea_smal@1x.png 157w,
                    ../images/blue_iced_tea_small@2x.png 314w"
              sizes="(min-width: 1440px) 467px, (min-width: 768px) 284px, (min-width: 375px) 157px, 100vw"
              src="../images/blue_iced_tea_large@1x.png"
              alt="A coctail"
              width="261"
              height="326"
            />
            <p class="drinkNotImgText">
              You haven't added any favorite cocktails yet
            </p>
          </div>
        )}
        {drink.length > 0 && <Paginator drinks={drink} />}
      </div>
    </div>
  );
};
