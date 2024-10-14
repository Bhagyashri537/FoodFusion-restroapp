import React from 'react'

function CategoryMenu() {
  return (
    <div className='mx-6'>
        <h2 className='text-xl font-semibold'>Find the best food</h2>
        <div className='my-5 flex gap-3'>
            <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white'>
                All
            </button>
            <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white'>
                Lunch
            </button>
            <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white'>
                Breakfast
            </button>
            <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white'>
                Dinner 
            </button>
            <button className='px-3 py-2 bg-gray-300 font-bold rounded-lg hover:bg-green-300 hover:text-white'>
                Snack
            </button>
        </div>
    </div>
  )
}

export default CategoryMenu