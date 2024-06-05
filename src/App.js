import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Sort from "./Components/Sort";
import "./scss/app.scss";


import React, { useEffect } from "react";

function App() {
  const [items, setItems] = React.useState([])

  
  React.useEffect(() => {
    fetch('https://665f60861e9017dc16f3faab.mockapi.io/items')
    .then((result) => result.json())
    .then((arr) => {setItems(arr)} )
  }, [items])

  return <div className="App">
    <div className="wrapper">
      <Header />
      
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />

          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock 
                key={obj.id}
                title={obj.title}
                price={obj.price} 
                imageUrl={obj.ImageUrl}
                sizes={obj.sizes}
                types={obj.types}
              />
              
            ))}
            
            
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
