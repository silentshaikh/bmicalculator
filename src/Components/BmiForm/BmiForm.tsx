"use client";
import React from 'react'
import HeightInput from '../HeightInput/HeightInput'
import WeightInput from '../WeightInput/WeightInput';
import Button from '../Button/Button';
import { Teko } from '@next/font/google';
import Message from '../Message/Message';
import { useCustomHook } from '@/Context/Context';
import BmiValue from '../BmiValue/BmiValue';
import ImageForm from '../ImageForm/ImageForm';
const poppin = Teko({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});
// const kanit = Kanit({
//   weight: ['400', '700'], 
//   subsets: ['latin'], 
//   display: 'swap', 
// });
function BmiForm() {
  const {submitForm} = useCustomHook();
  return (
    <>
     <form action="" className={`flex justify-center items-start flex-col  bg-white px-10 py-5 ${poppin.className} max-[450px]:px-5`} onSubmit={(e) => submitForm(e)}>
      <ImageForm/>
        <HeightInput/>
        <WeightInput/>
        <Message/>
        <Button/>
        <BmiValue/>
        </form> 
    </>
  )
}

export default BmiForm
