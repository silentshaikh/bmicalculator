import { Dispatch, FormEvent, ReactNode } from "react";

export interface ContextChild{
    children: ReactNode;
};
export interface HandleInput{
    height:string;
    weight:string;
};
export interface Action{
    type:string;
    payload:Payloads;
};
export interface Payloads{
    field:string;
    value:string;
};
export interface ActionType{
    HANDLE_INPUT:"HANDLE_INPUT",
};
export interface ContextType{
    inputState:HandleInput;
    dispatch:Dispatch<Action>;
    submitForm:(e:FormEvent<HTMLFormElement>) => void;
    err:string;
    personBmi:null | number;
    categ:string;
};