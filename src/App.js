import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios"
function App() {
  
  const [search, setSearch] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "c5710c83";
  const APP_KEY = "c6f8499a8cc846117599fd14a96626a5";


  useEffect(() => {
    getRecipes();
   },[]);

   const getRecipes=async()=>{
     const res = await Axios.get(
       `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );

     setRecipes(res.data.hits);
   }


  const onInputChange=e=>{
setSearch(e.target.value)

 
 };
 const onSearchClick = () => {
   getRecipes();
 };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      ></Header>
      <div className="container">
        <Recipes recipes={recipes}></Recipes>
      </div>
    </div>
  );
}

export default App;
