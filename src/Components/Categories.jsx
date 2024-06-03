import React, { useState } from "react";

function Categories(){
  const [activeIndex, setActiveIndex] = useState(0)
  
  const onCklickCategories = (index) => {
    setActiveIndex(index)
    console.log(index)
  }

    return (
        <div className="categories">
              <ul >
                <li onClick={ ( ) => onCklickCategories(0)} className={activeIndex === 0 ? 'active' : ''}>Все</li>
                <li onClick={ ( ) => onCklickCategories(1)} className={activeIndex === 1 ? 'active' : ''} >Мясные</li>
                <li onClick={ ( ) => onCklickCategories(2)} className={activeIndex === 2 ? 'active' : ''}>Вегетарианская</li>
                <li onClick={ ( ) => onCklickCategories(3)}className={activeIndex === 3 ? 'active' : ''}> Гриль</li>
                <li  onClick={ ( ) => onCklickCategories(4)}className={activeIndex === 4 ? 'active' : ''}> Острые</li>
                <li  onClick={ ( ) => onCklickCategories(5)}className={activeIndex === 5 ? 'active' : ''}>Закрытые</li>
              </ul>
            </div>
    )
}
export default Categories;