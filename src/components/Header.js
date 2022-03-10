// import React from "react";


// const Header=(props)=>{
//   const {search,onInputChange,onSearchClick}=props;
//     return (
//       <div className="jumbotron">
//         <h1 className="display-1">
//           <i className="fas fa-utensils"></i>Food Recipes
//         </h1>
//         <div className="input-group w-50 mx-auto">
//   <input type="text" className="form-control" placeholder="Search Your Fav Recipe...." value={search} 
//   onChange={onInputChange} />
// <button type="submit" className="btn btn-dark" onSearchClick={onSearchClick}>Search</button>
// </div>
//       </div>
//     );
// }


// export default Header;

import React from "react";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
         Food Recipe
      </h1>
      <div class="input-group w-50 mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div class="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;