import React, { useState } from "react";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

function Categories(){
  const [activeIndex, setActiveIndex] = useState(0)
  
  const onCklickCategories = (index) => {
    setActiveIndex(index)
    
  }

    return (
        <div className="categories">
              <ul >
                {categories.map((value, i) => (
                  <li key={i} onClick={() => onCklickCategories(i) } className={activeIndex === i ? 'active' : ''}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
    )
}
export default Categories;