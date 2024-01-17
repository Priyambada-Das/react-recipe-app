import React from 'react'
import Meal from './Components/Meal'
import './Components/style.css';
import {Routes, Route} from "react-router-dom"
import RecipeInfo from './RecipeInfo';

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Meal />}/>
    <Route path='/:mealId' element={<RecipeInfo />}/>
   </Routes>
   </>
  )
}

export default App
