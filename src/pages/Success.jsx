import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { BsCheckCircle } from 'react-icons/bs'; // Success icon
import { useNavigate } from 'react-router-dom';

function Success() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-t from-green-300 to-green-500'>
      {loading ? (
        <div className="flex flex-col items-center">
          <PropagateLoader color='white' />
          <p className='text-white mt-4 font-semibold text-lg'>Processing your order...</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow-lg p-8 flex flex-col items-center'>
          <BsCheckCircle className='text-green-600 text-6xl mb-4' />
          <h2 className='text-4xl font-bold mb-2 text-green-700'>Order Successful!</h2>
          <p className='text-gray-600 text-lg text-center'>
            Your order has been placed successfully. Thank you for choosing us!
          </p>
          <button onClick={() => navigate('/')} className='mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium shadow-md transition-colors'>
          Wanna Order Something Else?
          </button>
        </div>
      )}
    </div>
  );
}

export default Success;
