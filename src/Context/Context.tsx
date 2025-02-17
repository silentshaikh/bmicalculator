"use client";
import { Action, ActionType, ContextChild, ContextType, HandleInput } from '@/utils/type';
import React, { createContext, FormEvent, useContext, useReducer, useState } from 'react'

const BmiContext = createContext<ContextType|null>(null);
const ACTION:ActionType = {
  HANDLE_INPUT:"HANDLE_INPUT",
}
const inputData:HandleInput = {
    height:'',
    weight:'',
}
function Context({children}:ContextChild) {
  const [personBmi,setBmi] = useState<null | number>(null); //Person BMI
  const [categ,setCateg] = useState(""); //BMI Category
  const [err,setError] = useState<string>(''); //Error is produce when submit the form
  //Handle Inputs
  const handleInput = (state:HandleInput,action:Action) => {
    switch (action.type) {
      case ACTION.HANDLE_INPUT:
        state = {...state, [action.payload.field]:action.payload.value};
        return state;
      default:
        return state;
    }
  }
    const [inputState,dispatch] = useReducer(handleInput,inputData);
  // when Form has been submitting
    const submitForm = (e:FormEvent<HTMLFormElement>) => {
      console.log(inputState.height,inputState.weight)
      e.preventDefault();
      let numRegex = /^[0-9]+$/;
      if(!inputState.height.match(numRegex) || !inputState.weight.match(numRegex)){
        setError("Please Enter Number Only");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }
      if(inputState.height.trim() === ""   || inputState.weight.trim() === ""){
        setError('Please fill both fields');
        setTimeout(() => {
          setError("");
        }, 3000);
      return;
      };
      const strToNumHeight = parseInt(inputState.height);
      const strToNumWeight = parseInt(inputState.weight)
      //if height and weight less than equal to zero
      if(strToNumHeight <=0 || strToNumWeight <=0){
        setError("Please Enter Height and Weight greater than zero");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }
        const heightInMter = strToNumHeight/100;
        const bmiCalculate = +(strToNumWeight/(heightInMter**2)).toFixed(2);
        setBmi(bmiCalculate);
        

        //BMI Category
        if(bmiCalculate< 18.5){
          setCateg("Underweight");
        }else if(bmiCalculate > 18.5 && bmiCalculate < 29.5){
          setCateg("Normal weight");
        }else if(bmiCalculate > 25 && bmiCalculate < 29.9){
          setCateg("Overweight");
        }else{
          setCateg("Obese");
        }
      


    }
  return (
    <>
      <BmiContext.Provider value={{inputState,dispatch,submitForm,err,personBmi,categ}}> 
        <>
        {children}
        </>
      </BmiContext.Provider>
    </>
  )
}

export default Context;

//Custom Hook
const useCustomHook = () => {
  let bmiContext = useContext(BmiContext);
  if(!bmiContext){
    throw new Error("useCustomHook must be used within a ColorContext.Provider");
  };
  return bmiContext;
};
export {useCustomHook}