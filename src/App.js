import Categories from "./Components/Categories";
import Header from "./Components/Header";
import PizzaBlock from "./Components/PizzaBlock";
import Sort from "./Components/Sort";
import "./scss/app.scss";

import pizzas from "./assets/pizzas.json"

function App() {
  return <div classNameName="App">
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
            {pizzas.map((obj) => (
              <PizzaBlock 
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
