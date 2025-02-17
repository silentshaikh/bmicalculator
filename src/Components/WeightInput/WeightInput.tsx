import { useCustomHook } from '@/Context/Context';
import React from 'react'

function WeightInput() {
  const {dispatch} = useCustomHook();
  return (
    <>
    <div className='flex justify-center items-start flex-col'>

    <label htmlFor="weight" className='py-3 text-2xl'>Width (kgs):</label>
     <input className='bg-zinc-300 w-[400px] py-3 px-4 outline-none rounded-3xl max-[510px]:w-[350px] max-[410px]:w-[320px] max-[375px]:w-[300px] max-[350px]:w-[270px] max-[320px]:w-[240px] max-[290px]:w-[210px]' type="text" name="weight" placeholder='Enter Your Weight' id="weight"  onChange={(e) => dispatch({type:"HANDLE_INPUT",payload:{field:e.target.name,value:e.target.value}})}/> 
    </div>
    </>
  )
};
export default WeightInput;