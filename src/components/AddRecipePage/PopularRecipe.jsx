import React from "react";
import { Link } from "react-router-dom";
// import { PopularLink } from "./PopularDrinks.styled";
import { getDrinksPopular } from "services/drinksAPI";
// import pictureTest from '../../images/blue_iced_tea_large@1x.png';
// import { popularJSON } from "data/popularRecipe";
import { useEffect } from "react";
import styles from "./PopularRecipe.module.css"

// import axios from "axios";



// тимчасовий масив
const popularJSON = [
    {
        "_id": "639b6de9ff77d221f190c570",
        "drink": "Dragonfly",
        "drinkAlternate": "Sorry, not specified",
        "tags": "Sorry, not specified",
        "video": "Sorry, not specified",
        "category": "Ordinary Drink",
        "IBA": "Sorry, not specified",
        "alcoholic": "Alcoholic",
        "glass": "Highball glass",
        "description": "Dragonfly is a vibrant and citrusy cocktail that combines the flavors of vodka, orange liqueur, cranberry juice, and lime juice. It is made by shaking all the ingredients together with ice and straining it into a glass. The result is a refreshing and tangy drink with a beautiful pink color. Sip on this delightful cocktail and let your taste buds take flight.",
        "instructions": "In a highball glass almost filled with ice cubes, combine the gin and ginger ale. Stir well. Garnish with the lime wedge.",
        "instructionsES": "En un vaso alto casi lleno de cubitos de hielo, combine la ginebra y el ginger ale. Revuelva bien. Adorne con la rodaja de lima.",
        "instructionsDE": "In einem Highball-Glas, das fast mit Eiswürfeln gefüllt ist, den Gin mit dem Ginger Ale vermengen. Gut umrühren. Mit dem Limettenkeil garnieren.",
        "instructionsFR": "Dans un verre highball presque rempli de glaçons, mélanger le gin et le soda au gingembre. Bien mélanger. Garnir avec le quartier de lime.",
        "instructionsIT": "In un bicchiere highball quasi riempito con cubetti di ghiaccio, unire il gin e la ginger ale. Mescolare bene. Guarnire con lo spicchio di lime.",
        "instructionsRU": "В стакане хайбол, почти заполненном кубиками льда, смешайте джин и имбирный эль. Размешайте как следует. Украсить долькой лайма.",
        "instructionsPL": "W szklance typu highball, prawie wypełnionej kostkami lodu, połącz gin i piwo imbirowe. Dobrze wymieszać. Udekoruj ćwiartką z limonki.",
        "instructionsUK": "У склянці хайбол, майже наповненій кубиками льоду, змішайте джин і імбирний ель. Добре розмішати. Прикрасьте шматочком лайма.",
        "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Dragonfly.jpg",
        "ingredients": [
            {
                "title": "Gin",
                "measure": "1 1/2 oz ",
                "ingredientId": "64aebb7f82d96cc69e0eb4a6"
            },
            {
                "title": "Ginger ale",
                "measure": "4 oz ",
                "ingredientId": "64f1d5c369d8333cf130fb7d"
            },
            {
                "title": "Lime",
                "measure": "1 ",
                "ingredientId": "64aebb7f82d96cc69e0eb4db"
            }
        ],
        "shortDescription": "A vibrant and citrusy cocktail with vodka, orange liqueur, and cranberry juice.",
        "users": [
            "654146718da4ad1d4cb4fd93"
        ]
    },
    {
        "_id": "639b6de9ff77d221f190c520",
        "drink": "Avalon",
        "drinkAlternate": "Sorry, not specified",
        "tags": "OrdinaryDrink,Alcoholic",
        "video": "https://youtu.be/lxwWmXIuqrI?si=SOOIxhBhjV4eERs9",
        "category": "Ordinary Drink",
        "IBA": "Sorry, not specified",
        "alcoholic": "Alcoholic",
        "glass": "Highball glass",
        "description": "Avalon is a tropical and fruity cocktail that transports you to a sunny beach with its blend of rum and tropical fruit juices. It is made with white rum, pineapple juice, orange juice, and a splash of grenadine. The result is a vibrant and refreshing drink that captures the essence of paradise. Sit back, relax, and enjoy the taste of the tropics.",
        "instructions": "Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.",
        "instructionsES": "Llena un vaso alto con hielo. Agregue el vodka, los jugos de limón y manzana, el licor de plátano Pisang Ambon y complete con limonada. Revuelva ligeramente y adorne con una cáscara de pepino en espiral y una cereza roja. El pepino proporciona entusiasmo y se ve atractivo. Esta bebida, creada por Timo Haimi, ganó el primer premio en el Concurso de Tragos Largos de Vodka de Finlandia de 1991.",
        "instructionsDE": "Füllen Sie ein hohes Glas mit Eis. Legen Sie den Finlandia Wodka, Zitronen- und Apfelsäfte, Pisang Ambon und geben Sie Limonade dazu. Leicht umrühren und mit einer spiralförmigen Gurkenhaut und einer roten Kirsche garnieren. Die Gurke sorgt für Schärfe und sieht attraktiv aus. Dieses von Timo Haimi kreierte Getränk erhielt 1991 den ersten Preis beim Finlandia Wodka Long Drink Wettbewerb.",
        "instructionsFR": "Remplissez un grand verre de glace. Superposez la vodka Finlandia, les jus de citron et de pomme, le Pisang Ambon et complétez avec de la limonade. Remuer légèrement et garnir d'une peau de concombre en spirale et d'une cerise rouge. Le concombre donne du zeste et a l'air attrayant. Cette boisson, créée par Timo Haimi, a remporté le premier prix du concours Finlandia Vodka Long Drink en 1991.",
        "instructionsIT": "Riempi un bicchiere alto di ghiaccio.\r\nVersare la Vodka, succhi di limone, mela, Pisang Ambon o un liquore alla banana e completare con la limonata.\r\nMescolare leggermente e guarnire con una buccia di cetriolo a spirale e una ciliegia rossa.\r\nIl cetriolo fornisce la scorza e sembra attraente.\r\nQuesta bevanda, creata da Timo Haimi, ha vinto il primo premio nel 1991 Finlandia Vodka Long Drink Competition.",
        "instructionsRU": "Наполните высокий стакан льдом. Налейте водку Finlandia, лимонный и яблочный соки, писанг амбон и долейте лимонад. Слегка перемешайте и украсьте свернутой спиралью кожурой огурца и красной вишней. Огурец дает изюминку и выглядит привлекательно. Этот напиток, созданный Тимо Хайми, занял первое место на конкурсе лонгдринков Finlandia Vodka в 1991 году.",
        "instructionsPL": "Napełnij wysoką szklankę lodem. Pokryj wódką Finlandia, sokiem z cytryny i jabłka, Pisang Ambon i dopełnij lemoniadą. Delikatnie wymieszaj i udekoruj spiralną skórką ogórka i czerwoną wiśnią. Ogórek dodaje skórki i atrakcyjnie wygląda. Stworzony przez Timo Haimiego napój zdobył pierwszą nagrodę w konkursie Finlandia Vodka Long Drink w 1991 roku.",
        "instructionsUK": "Наповніть високий стакан льодом. Покладіть горілку Finlandia, лимонний і яблучний соки, пісанг-амбон і залийте лимонадом. Трохи перемішайте та прикрасьте шкіркою огірка зі спіралькою та червоною вишнею. Огірок надає родзинку і виглядає привабливо. Цей напій, створений Тімо Хаімі, зайняв першу премію на конкурсі Finlandia Vodka Long Drink Competition у 1991 році.",
        "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Avalon.jpg",
        "ingredients": [
            {
                "title": "Vodka",
                "measure": "3 parts",
                "ingredientId": "64aebb7f82d96cc69e0eb4b9"
            },
            {
                "title": "Pisang Ambon",
                "measure": "1 part ",
                "ingredientId": "64f1d5c169d8333cf130fb44"
            },
            {
                "title": "Apple juice",
                "measure": "6 parts ",
                "ingredientId": "64aebb7f82d96cc69e0eb4d1"
            },
            {
                "title": "Lemon juice",
                "measure": "1 1/2 part ",
                "ingredientId": "64aebb7f82d96cc69e0eb4d3"
            },
            {
                "title": "Lemonade",
                "ingredientId": "64aebb7f82d96cc69e0eb4f8"
            }
        ],
        "shortDescription": "A tropical and fruity cocktail with a blend of rum and tropical fruit juices.",
        "users": [
            "654146718da4ad1d4cb4fd93"
        ]
    },
    {
        "_id": "639b6de9ff77d221f190c559",
        "drink": "Pineapple Gingerale Smoothie",
        "drinkAlternate": "Sorry, not specified",
        "tags": "Sorry, not specified",
        "video": "Sorry, not specified",
        "category": "Other/Unknown",
        "IBA": "Sorry, not specified",
        "alcoholic": "Non alcoholic",
        "glass": "Highball Glass",
        "description": "Pineapple Gingerale Smoothie is a delightful and creamy tropical smoothie that combines the tropical sweetness of pineapple with the fizzy kick of ginger ale. This refreshing beverage is perfect for hot summer days or as a refreshing treat any time of the year. Indulge in the creamy texture and tropical flavors of Pineapple Gingerale Smoothie and let it transport you to a sunny island getaway.",
        "instructions": "Throw everything into a blender and liquify.",
        "instructionsES": "Echar todo en una licuadora y licuar.",
        "instructionsDE": "Alles in einen Mixer geben und aufschlagen.",
        "instructionsFR": "Mettre le tout dans un blender et liquéfier.",
        "instructionsIT": "Getta tutto in un frullatore e liquida.",
        "instructionsRU": "Все бросить в блендер и измельчить.",
        "instructionsPL": "Wrzuć wszystko do blendera i upłynnij.",
        "instructionsUK": "Киньте все в блендер і перемішайте.",
        "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Pineapple_Gingerale_Smoothie.jpg",
        "ingredients": [
            {
                "title": "Ginger",
                "measure": "1/4 inch ",
                "ingredientId": "64aebb7f82d96cc69e0eb4da"
            },
            {
                "title": "Pineapple",
                "measure": "1/2 ",
                "ingredientId": "64f1d5c669d8333cf130fbb4"
            }
        ],
        "shortDescription": "A creamy and tropical smoothie with the flavors of pineapple and ginger ale.",
        "users": [
            "653e60de609109b415cd318e"
        ]
    },
    {
        "_id": "639b6de9ff77d221f190c508",
        "drink": "Irish Coffee",
        "drinkAlternate": "Sorry, not specified",
        "tags": "IBA,ContemporaryClassic",
        "video": "https://youtu.be/9xwtCHELxMA?si=j9qrBEoFTqqgPVCr",
        "category": "Coffee / Tea",
        "IBA": "Contemporary Classics",
        "alcoholic": "Alcoholic",
        "glass": "Irish coffee cup",
        "description": "Irish Coffee is a classic hot cocktail that combines the richness of coffee with the smoothness of Irish whiskey. It is made by pouring hot coffee into a glass, adding a shot of Irish whiskey, and topping it off with a dollop of whipped cream. The warmth of the drink and the sweetness of the cream make it a comforting and indulgent treat.",
        "instructions": "Heat the coffee, whiskey and sugar; do not boil. Pour into glass and top with cream; serve hot.",
        "instructionsES": "Calienta el café, el whisky y el azúcar; no hierva. Vierta en un vaso y cubra con crema; servir caliente.",
        "instructionsDE": "Kaffee, Whiskey und Zucker erhitzen; nicht kochen lassen. In ein Glas geben und mit Sahne übergießen; heiß servieren.",
        "instructionsFR": "Faire chauffer le café, le whisky et le sucre ; ne pas faire bouillir. Verser dans un verre et garnir de crème; Servir chaud.",
        "instructionsIT": "Riscaldare il caffè, il whisky e lo zucchero; non bollire. Versare nel bicchiere e ricoprire con la panna; servito caldo.",
        "instructionsRU": "Нагрейте кофе, виски и сахар; не кипятить. Перелейте в стакан и украсьте сливками; подавать горячим.",
        "instructionsPL": "Podgrzej kawę, whisky i cukier; nie gotuj. Wlać do szklanki i posypać śmietaną; podawać na gorąco.",
        "instructionsUK": "Розігріти каву, віскі і цукор; не кип'ятити. Перелити в келих і зверху полити кремом; подавати гарячим.",
        "drinkThumb": "https://ftp.goit.study/img/drinkify/recipes/Irish_Coffee.jpg",
        "ingredients": [
            {
                "title": "Irish whiskey",
                "measure": "1 1/2 oz ",
                "ingredientId": "64aebb7f82d96cc69e0eb4c2"
            },
            {
                "title": "Coffee",
                "measure": "8 oz ",
                "ingredientId": "64aebb7f82d96cc69e0eb4e7"
            },
            {
                "title": "Sugar",
                "measure": "1 tsp ",
                "ingredientId": "64aebb7f82d96cc69e0eb4bc"
            },
            {
                "title": "Whipped cream",
                "measure": "1 tblsp ",
                "ingredientId": "64f1d5c069d8333cf130fb38"
            }
        ],
        "shortDescription": "A classic hot cocktail with coffee, Irish whiskey, and whipped cream.",
        "users": [
            "653cfb079c80ef406ad29c3b",
            "653d272f9ff0577a67b14ce7",
            "653e60de609109b415cd318e"
        ]
    }
] 


export const PopularRecipe = () => {
    useEffect(() => {
        // console.log("log in useEffect");
        const popular = [];
        getDrinksPopular()
            .then(result => {
                popular.push(result)
            }).catch (error => {
                return console.log(error);
            })
            .finally(()=> console.log("finally"));
        // console.log(popular);
    },[])
    // console.log("log in popular");

    return (
        <div className={styles.popularContainer}>
            <h3 className={styles.title}>Popular drinks</h3>
            <ul className={styles.popularList}>
                {popularJSON.map(drink => <Link to="/drink" className={styles.drink} key={drink._id} id={drink._id}>
                    <img
                        className={styles.drinkImg}
                        src={drink.drinkThumb}
                        alt={drink.drinkThumb}
                    />
                    <div className={styles.drinkText}>
                        <h3 className={styles.drinkTitle}>{drink.drink}</h3>
                        <p className={styles.drinkInstructions}>{drink.instructions}</p>
                    </div>
                </Link>)}
            </ul>
        </div>
    
)}
