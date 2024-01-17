import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem'
import RecipeIndex from './RecipeIndex'

const Meal = () => {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search, setsearch] = useState("");
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data);
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
    const searchRecipe = (event) => {
        if (event.key == "Enter"){
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1>Search your food recipe</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae placeat, delectus fugit blanditiis id minus perferendis.
                    </h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={e => setsearch(e.target.value)} onKeyPress={searchRecipe} />
                </div>
                <div className="container">
                    {
                        show ? <Mealitem data={item} /> : "Not Found"
                    }
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => { setIndex(alpha) }} />
                </div>
            </div>
        </>
    )
}

export default Meal
