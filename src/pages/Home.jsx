import React, { useState, useEffect } from "react";
import Meals from "../components/Meals.jsx";
import {Routes, Route, Link} from 'react-router-dom';


const Home = function(){
    const [randomMeal, setRandomMeal] = useState(null);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
  
    const API_URL_RANDOM_MEAL = "https://www.themealdb.com/api/json/v1/1/random.php";
    const API_URL_SEARCH_MEAL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";//тут нужно дописать слово 
    const API_URL_SEARCH_BY_FIRST_LETTER = "https://www.themealdb.com/api/json/v1/1/search.php?f=";//тут нужно дописать букву

    // Получаем инпут
    const settingSearch=(e)=>{
        setSearch(e.target.value);
    }
    const submit = (e) => {
        e.preventDefault();
        const searchMeals = `${API_URL_SEARCH_MEAL}`+search;
        console.log(search);
        console.log(searchMeals);
        fetch(searchMeals)
          .then(response => response.json())
          .then(data => setSearchResult(data.meals))
          .catch(error => console.log(error));
      };

    // Рандомное блюдо
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
            <section className="random__meal">
                {randomMeal && (
                    <div className="random__meal__text">
                        <h2 className="h2">Meal of the Day</h2>
                        <p className="title">
                            <a className="" href={`/${randomMeal.idMeal}`}>  {randomMeal.strMeal}   </a>
                        </p>
                        <p className="random__meal__info">
                            {randomMeal.strCategory} | {randomMeal.strArea}
                        </p>
                    </div>
                )}
                {randomMeal && (
                    <div className="random__meal__img">
                        <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                    </div>
                )}
            </section>

            <h2 className="h2">Find your Meal</h2>

            <form onSubmit={submit} className="search__form">
                <input type="text" value={search} placeholder="Find your meal" onChange={settingSearch}/>
                <button type="submit">Search</button>
            </form>
            
            <section className="meals">
                <div>
                    {searchResult.map((item) => (
                        <Link to={`/${item.idMeal}`} key={item.idMeal}>
                            <Meals
                                id={item.idMeal}
                                key={item.idMeal}
                                img={item.strMealThumb}
                                title={item.strMeal}
                                area={item.strArea}
                                category={item.strCategory}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home;

