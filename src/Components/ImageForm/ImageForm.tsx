import React from 'react'

function ImageForm() {
    const personImg = 'images/cartoon-illustration-smiling-young-man-with-brown-hair-blue-shirt_1216680-1572.jpeg';
  return (
    <>
    <h1 className=' text-xl'>BMI CALCULATOR</h1>
     <img className='w-52 mx-auto' src={personImg} alt="person-image" /> 
    </>
  );
}

export default ImageForm
