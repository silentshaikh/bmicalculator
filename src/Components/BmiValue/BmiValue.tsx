import { useCustomHook } from '@/Context/Context';
import React from 'react';
import {Kanit} from "@next/font/google";

const kanit = Kanit({
  weight: ['400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
});
function BmiValue() {
    const {categ,personBmi} = useCustomHook();
    const bmiCateg = `${categ} : `;
  return (
    <>
    <div className={`text-center py-3 flex mx-auto text-2xl ${kanit.className}`}>
    <h3 className=' pr-2'>{categ && bmiCateg}</h3> 
     <h3 > {categ && personBmi}</h3>
    </div>
    </>
  )
};
export default BmiValue;