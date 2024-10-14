import React from 'react'
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData';

function FoodItems() {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {FoodData.map((food, id) => {
            return (
                <FoodCard 
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                />
            )
        })}
        <FoodCard/>
    </div>
  )
}

export default FoodItems