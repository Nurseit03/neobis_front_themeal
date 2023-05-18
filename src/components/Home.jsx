// import React, { useState, useEffect } from "react";

// const Home = function(){

//     const API_URL_RANDOM_MEAL="www.themealdb.com/api/json/v1/1/random.php";

//     return(
//         <div className="home">
//             <section className="random-meal-block">
//                 <div className="random-meal-block-text">
//                     <h2 className="h2">Meal of the Day</h2>
//                     <p className="title">
//                         <a className="" href="/53072">Crispy Eggplant</a>
//                     </p>
//                     <p className="random-meal-info">
//                         Vegetarian | Filipino
//                     </p>
//                 </div>
//                 <div className="random-meal-block-img">
//                     <img src="https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg" alt="Crispy Eggplant" />
//                 </div>
//             </section>

//             <h2 className="h2">Find your Meal</h2>

//             <form className="search-block">
//                 <input type="text" placeholder="Find your meal"/>
//                 <button type="submit">Search</button>
//             </form>
//         </div>
//     )
// }

// export default Home;
import React, { useState } from "react";

const Home = function(){
    const [randomMeal, setRandomMeal] = useState(null);
    const API_URL_RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";

    const fetchRandomMeal = () => {
        fetch(API_URL_RANDOM_MEAL)
            .then(response => response.json())
            .then(data => setRandomMeal(data.meals[0]))
            .catch(error => console.log(error));
    };

    if (!randomMeal) {
        fetchRandomMeal();
    }

    return(
        <div className="home">
            <section className="random-meal-block">
                {randomMeal && (
                    <div className="random-meal-block-text">
                        <h2 className="h2">Meal of the Day</h2>
                        <p className="title">
                            <a className="" href={`/${randomMeal.idMeal}`}>{randomMeal.strMeal}</a>
                        </p>
                        <p className="random-meal-info">
                            {randomMeal.strCategory} | {randomMeal.strArea}
                        </p>
                    </div>
                )}
                {randomMeal && (
                    <div className="random-meal-block-img">
                        <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                    </div>
                )}
            </section>

            <h2 className="h2">Find your Meal</h2>

            <form className="search-block">
                <input type="text" placeholder="Find your meal"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home;

