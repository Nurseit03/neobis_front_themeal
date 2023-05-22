import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [mealDetail, setMealDetail] = useState(null);

    const API_MEAL_DETAIL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    useEffect(() => {
        fetch(API_MEAL_DETAIL)
            .then(response => response.json())
            .then(data => setMealDetail(data.meals[0]))
            .catch(error => console.log(error));
    }, [API_MEAL_DETAIL]);

    if (!mealDetail) {
        return <div>Loading...</div>;
    }

    const { strMeal, strCategory, strArea, strMealThumb, strInstructions, strYoutube } = mealDetail;

    return (
        <div className="meal__detail">
            <section className="meal__detail__info">
                <div className="meal__detail__info__text">
                    <p className="title">{strMeal}</p>
                    <p className="meal__info">{strCategory} | {strArea}</p>
                    <div className="ingredients">
                        <h3>Ingredients:</h3>
                        <div>
                            {Object.entries(mealDetail)
                                .filter(([key, value]) => key.includes("Ingredient") && value)
                                .map(([key, value]) => (
                                    <p key={key}>-{value}</p>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="meal__detail__img">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
            </section>
            <section className="meal__detail__instruction">
                <h2 className="h2">Instruction</h2>
                <p className="instruction__text">{strInstructions}</p>
                <a className="meal__detail__youtube" href={strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                </a>
            </section>
        </div>
    );
};

export default Detail;
